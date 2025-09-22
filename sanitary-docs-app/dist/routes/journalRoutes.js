"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const journalController_1 = __importDefault(require("../controllers/journalController"));
const router = (0, express_1.Router)();
const journalController = journalController_1.default;
// Route to list all journal entries
router.get('/journals', journalController.list);
// Route to show details of a specific journal entry
router.get('/journals/:id', journalController.show);
// Route to display the form for creating a new journal entry
router.get('/journals/new', journalController.create);
// Route to save a new journal entry
router.post('/journals', journalController.store);
// Route to display the form for editing an existing journal entry
router.get('/journals/edit/:id', journalController.edit);
// Route to update an existing journal entry
router.put('/journals/:id', journalController.update);
// Route to delete a journal entry
router.delete('/journals/:id', journalController.delete);
exports.default = router;
