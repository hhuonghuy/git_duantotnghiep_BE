import dotenv from 'dotenv';

dotenv.config();

export const config = {
	db: {
		host: process.env.DB_HOST || 'localhost',
		user: 'root',
		password: '',
		database: process.env.DB_DATABASE || 'test',
		connectTimeout: 60000,
	},
	listPerPage: 10,
};
