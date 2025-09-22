"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalDressingsRegistry = void 0;
const mongoose_1 = require("mongoose");
const JournalDressingsRegistrySchema = new mongoose_1.Schema({
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
exports.JournalDressingsRegistry = (0, mongoose_1.model)('JournalDressingsRegistry', JournalDressingsRegistrySchema);
