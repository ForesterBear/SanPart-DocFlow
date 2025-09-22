"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const journalRoutes_1 = __importDefault(require("./routes/journalRoutes"));
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sanitary_docs';
// Middleware setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
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
app.get('/home', authMiddleware_1.default, (req, res) => {
    res.render('home');
});
// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
// Routes
app.use('/auth', authRoutes_1.default);
app.use('/journals', authMiddleware_1.default, journalRoutes_1.default);
// Connect to MongoDB and start the server
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
