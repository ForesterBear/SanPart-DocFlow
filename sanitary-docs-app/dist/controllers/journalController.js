"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const JournalPatientsRegistry_1 = require("../models/JournalPatientsRegistry");
class JournalController {
    // List all journal entries
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const journals = yield JournalPatientsRegistry_1.JournalPatientsRegistry.find();
                res.render('journals/list', { journals });
            }
            catch (error) {
                res.status(500).send('Error retrieving journals');
            }
        });
    }
    // Show details of a specific journal entry
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const journal = yield JournalPatientsRegistry_1.JournalPatientsRegistry.findById(id);
                if (!journal) {
                    return res.status(404).send('Journal not found');
                }
                res.render('journals/detail', { journal });
            }
            catch (error) {
                res.status(500).send('Error retrieving journal details');
            }
        });
    }
    // Display form for creating a new journal entry
    create(req, res) {
        res.render('journals/form');
    }
    // Store a new journal entry
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newJournal = new JournalPatientsRegistry_1.JournalPatientsRegistry(req.body);
                yield newJournal.save();
                res.redirect('/journals');
            }
            catch (error) {
                res.status(400).send('Error creating journal entry');
            }
        });
    }
    // Display form for editing an existing journal entry
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const journal = yield JournalPatientsRegistry_1.JournalPatientsRegistry.findById(id);
                if (!journal) {
                    return res.status(404).send('Journal not found');
                }
                res.render('journals/form', { journal });
            }
            catch (error) {
                res.status(500).send('Error retrieving journal for editing');
            }
        });
    }
    // Update an existing journal entry
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield JournalPatientsRegistry_1.JournalPatientsRegistry.findByIdAndUpdate(id, req.body);
                res.redirect('/journals');
            }
            catch (error) {
                res.status(400).send('Error updating journal entry');
            }
        });
    }
    // Delete a journal entry
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield JournalPatientsRegistry_1.JournalPatientsRegistry.findByIdAndDelete(id);
                res.redirect('/journals');
            }
            catch (error) {
                res.status(500).send('Error deleting journal entry');
            }
        });
    }
}
exports.default = new JournalController();
