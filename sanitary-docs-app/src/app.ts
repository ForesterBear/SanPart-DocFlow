import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';
import authMiddleware from './middlewares/authMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sanitary_docs';

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
// Діагностика токена і секрету
app.use((req, res, next) => {
    if (req.session) {
        console.log('Session token:', req.session.token);
    }
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    next();
});

// Головна сторінка: форма логіну
app.get('/', (req, res) => {
    res.render('auth/login');
});

// HOME сторінка після авторизації
app.get('/home', authMiddleware, (req, res) => {
    res.render('home');
});

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

// Routes
app.use('/auth', authRoutes);
app.use('/journals', authMiddleware, journalRoutes);


// Connect to MongoDB and start the server
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });



