import { Schema, model } from 'mongoose';

const cleaningRegistrySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    responsiblePerson: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

export const CleaningRegistry = model('CleaningRegistry', cleaningRegistrySchema);