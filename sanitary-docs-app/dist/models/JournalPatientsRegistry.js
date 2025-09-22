"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalPatientsRegistry = void 0;
const mongoose_1 = require("mongoose");
const JournalPatientsRegistrySchema = new mongoose_1.Schema({
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
exports.JournalPatientsRegistry = (0, mongoose_1.model)('JournalPatientsRegistry', JournalPatientsRegistrySchema);
