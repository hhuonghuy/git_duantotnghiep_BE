import {getAllUsers, registerUser} from '../services/users.service.js';

import express from 'express';
import {userController} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', userController.create); // /api/resgister
// router.get('/users', userController.create);
router.post('/login', userController.login);

export default router;
