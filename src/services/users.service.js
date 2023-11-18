import {getOffset} from '../helper.js';
import {query} from './connect.service.js';

/* register user */
export const registerUser = async (userInfo) => {
	const {email, password} = userInfo;
	const result = await query(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password]);

	let message = 'User registered failed';

	if (result.affectedRows) {
		message = 'User registered successfully';
	}

	return {message};
};

/* get all user */
export const getAllUsers = async (page = 1) => {
	const offset = getOffset(page, 10);
	const result = await query(`SELECT * FROM users LIMIT 10 OFFSET ${offset}`);

	return result;
};

/* get user by email */
export const getUserByEmail = async (email) => {
	const result = await query(`SELECT * FROM users WHERE email = ?`, [email]);

	return result;
};

/* login email & password */
export const loginEmailPassword = async (email, password) => {
	const result = await query(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]);

	return result;
};
