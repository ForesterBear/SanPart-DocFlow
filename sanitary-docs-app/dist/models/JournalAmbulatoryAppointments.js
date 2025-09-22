"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JournalAmbulatoryAppointmentsSchema = new mongoose_1.Schema({
    patientName: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
}, { timestamps: true });
const JournalAmbulatoryAppointments = (0, mongoose_1.model)('JournalAmbulatoryAppointments', JournalAmbulatoryAppointmentsSchema);
exports.default = JournalAmbulatoryAppointments;
