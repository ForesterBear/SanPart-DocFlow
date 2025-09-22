import { Schema, model } from 'mongoose';

const JournalPatientsRegistrySchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    dateOfAdmission: {
        type: Date,
        required: true,
    },
    patientFullName: {
        type: String,
        required: true,
    },
    yearOfBirth: {
        type: Number,
        required: true,
    },
    rank: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    transferredToHospital: {
        type: String,
        required: false,
    },
    dateOfDischarge: {
        type: Date,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
});

export const JournalPatientsRegistry = model('JournalPatientsRegistry', JournalPatientsRegistrySchema);