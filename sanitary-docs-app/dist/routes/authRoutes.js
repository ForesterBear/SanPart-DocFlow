"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const router = (0, express_1.Router)();
const authController = authController_1.default;
// Відображення форм
router.get('/login', (req, res) => {
    res.render('auth/login');
});
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/login', authController.login);
router.post('/register', authController.register);
exports.default = router;
