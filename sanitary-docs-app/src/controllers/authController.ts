import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/User';
import jwt from 'jsonwebtoken';

class AuthController {
    async register(req: Request, res: Response) {
        const { username, password, role } = req.body;
        // Перевірка на унікальність username
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Користувач з таким іменем вже існує');
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Save the user to the database
        const user = await UserModel.create({ username, password: hashedPassword, role });
        // Створюємо токен одразу після реєстрації
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        req.session.token = token;
        res.redirect('/home');
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        // Fetch the user from the database (pseudo code)
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
    // Зберігаємо токен у сесії
    req.session.token = token;
    res.redirect('/home');
    }
}

export default new AuthController();