import * as dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import userRoutes from './routes/user.routes.js';

dotenv.config();

/* config */
const app = express();
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(bodyParser.json());
app.use(cors());

// routes
app.get('/', (_, res) => {
	res.json({message: 'ok'});
});

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({message: err.message});
	return;
});

// start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
