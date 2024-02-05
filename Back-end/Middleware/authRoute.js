// authRoutes.js
import express from 'express';

const router = express.Router();

// Login route
router.get('/login', (req, res) => {
 // Handle the login logic here
 res.send('Login Page');
});

export default router;
