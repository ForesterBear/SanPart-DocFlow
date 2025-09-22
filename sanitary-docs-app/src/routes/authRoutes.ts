import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();

const authController = AuthController;

// Відображення форм
router.get('/login', (req, res) => {
	res.render('auth/login');
});
router.get('/register', (req, res) => {
	res.render('auth/register');
});

router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;