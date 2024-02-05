import express from 'express';
import { getUser, userLogin, userRegister } from '../Controllers/userController.js';

const router = express.Router();

// Public routes
router.post('/register', userRegister);
router.post('/login', userLogin);

// Static route for login page
router.get('/login', (req, res) => {
    res.send('Login Page');
});

// Parameterized route for getting a user by ID
router.get('/:id', getUser);

export default router;
