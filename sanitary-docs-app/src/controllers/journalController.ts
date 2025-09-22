import { Request, Response } from 'express';
import { JournalPatientsRegistry } from '../models/JournalPatientsRegistry';

class JournalController {
    // List all journal entries
    async list(req: Request, res: Response) {
        try {
            const journals = await JournalPatientsRegistry.find();
            res.render('journals/list', { journals });
        } catch (error) {
            res.status(500).send('Error retrieving journals');
        }
    }

    // Show details of a specific journal entry
    async show(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const journal = await JournalPatientsRegistry.findById(id);
            if (!journal) {
                return res.status(404).send('Journal not found');
            }
            res.render('journals/detail', { journal });
        } catch (error) {
            res.status(500).send('Error retrieving journal details');
        }
    }

    // Display form for creating a new journal entry
    create(req: Request, res: Response) {
        res.render('journals/form');
    }

    // Store a new journal entry
    async store(req: Request, res: Response) {
        try {
            const newJournal = new JournalPatientsRegistry(req.body);
            await newJournal.save();
            res.redirect('/journals');
        } catch (error) {
            res.status(400).send('Error creating journal entry');
        }
    }

    // Display form for editing an existing journal entry
    async edit(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const journal = await JournalPatientsRegistry.findById(id);
            if (!journal) {
                return res.status(404).send('Journal not found');
            }
            res.render('journals/form', { journal });
        } catch (error) {
            res.status(500).send('Error retrieving journal for editing');
        }
    }

    // Update an existing journal entry
    async update(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await JournalPatientsRegistry.findByIdAndUpdate(id, req.body);
            res.redirect('/journals');
        } catch (error) {
            res.status(400).send('Error updating journal entry');
        }
    }

    // Delete a journal entry
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await JournalPatientsRegistry.findByIdAndDelete(id);
            res.redirect('/journals');
        } catch (error) {
            res.status(500).send('Error deleting journal entry');
        }
    }
}

export default new JournalController();