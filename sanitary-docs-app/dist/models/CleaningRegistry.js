"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleaningRegistry = void 0;
const mongoose_1 = require("mongoose");
const cleaningRegistrySchema = new mongoose_1.Schema({
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
exports.CleaningRegistry = (0, mongoose_1.model)('CleaningRegistry', cleaningRegistrySchema);
