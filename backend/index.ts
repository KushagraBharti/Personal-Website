import express, { Request, Response } from 'express';
import pool from './db';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/projects', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
