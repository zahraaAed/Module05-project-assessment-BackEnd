import express from 'express';


import { userLogin, userRegister } from '../Controllers/userController.js';

const router = express.Router();

// Public routes
router.post('/register', userRegister);
router.post('/login',userLogin);


export default router;