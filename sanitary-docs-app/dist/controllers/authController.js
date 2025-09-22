"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, role } = req.body;
            // Перевірка на унікальність username
            const existingUser = yield User_1.default.findOne({ username });
            if (existingUser) {
                return res.status(400).send('Користувач з таким іменем вже існує');
            }
            // Hash the password
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            // Save the user to the database
            const user = yield User_1.default.create({ username, password: hashedPassword, role });
            // Створюємо токен одразу після реєстрації
            const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
            req.session.token = token;
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/home');
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            // Fetch the user from the database (pseudo code)
            const user = yield User_1.default.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isMatch = yield bcryptjs_1.default.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
            // Зберігаємо токен у сесії
            req.session.token = token;
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/home');
        });
    }
}
exports.default = new AuthController();
