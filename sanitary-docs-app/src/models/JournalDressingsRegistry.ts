import { Schema, model } from 'mongoose';

const JournalDressingsRegistrySchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    procedureDate: {
        type: Date,
        required: true,
    },
    patientFullName: {
        type: String,
        required: true,
    },
    procedureDetails: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        default: '',
    },
}, { timestamps: true });

export const JournalDressingsRegistry = model('JournalDressingsRegistry', JournalDressingsRegistrySchema);