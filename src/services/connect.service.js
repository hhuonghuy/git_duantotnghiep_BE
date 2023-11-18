import {config} from '../configs/database.config.js';
import mysql from 'mysql2/promise';

export async function query(sql, params) {
	const connection = await mysql.createConnection(config.db);
	const [results] = await connection.execute(sql, params);

	return results;
}
