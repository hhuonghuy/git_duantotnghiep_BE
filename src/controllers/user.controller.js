import {getAllUsers, getUserByEmail, registerUser} from '../services/users.service.js';
import {userLogin, userRegister} from '../schemas/user.schema.js';

import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const userController = {
	/* create */
	create: async (req, res) => {
		try {
			/* validate */
			const {error} = userRegister.validate(req.body, {abortEarly: false});
			if (error) {
				const errors = error.details.map((err) => err.message);
				return res.status(400).json({errors});
			}

			/* check email exist */
			const {email} = req.body;
			const user = await getUserByEmail(email);
			if (user.length > 0) {
				return res.status(400).json({message: 'Email already exists'});
			}

			/* hash password */
			const salt = await bcrypt.genSalt(10);
			const passwordHash = await bcrypt.hash(req.body.password, salt);

			/* create user */
			const result = await registerUser({...req.body, password: passwordHash});
			if (!result) {
				return res.status(400).json({message: 'User registered failed'});
			}
			return res.status(200).json({message: 'User registered successfully'});
			// const result = await getAllUsers(req.query.page);
			// return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json({message: 'Internal server error'});
		}
	},

	/* login */
	login: async (req, res) => {
		try {
			/* validate */
			const {error} = userLogin.validate(req.body, {abortEarly: false});
			if (error) {
				const errors = error.details.map((err) => err.message);
				return res.status(400).json({errors});
			}

			/* check email exist */
			const {email, password} = req.body;
			const user = await getUserByEmail(email);
			if (user.length === 0) {
				return res.status(400).json({message: 'Email or password is incorrect'});
			}

			/* compare password */
			const isMatch = await bcrypt.compare(password, user[0].password);
			if (!isMatch) {
				return res.status(400).json({message: 'Email or password is incorrect'});
			}

			/* return token */
			const token = jwt.sign({id: user[0].id}, process.env.TOKEN_SECRET);
			const {password: _, ...userInfo} = user[0];

			return res.status(200).json({accessToken: token, userInfo});
		} catch (error) {
			return res.status(500).json({message: 'Internal server error'});
		}
	},
};
