import { Schema, model } from 'mongoose';

const JournalAmbulatoryAppointmentsSchema = new Schema({
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

const JournalAmbulatoryAppointments = model('JournalAmbulatoryAppointments', JournalAmbulatoryAppointmentsSchema);

export default JournalAmbulatoryAppointments;