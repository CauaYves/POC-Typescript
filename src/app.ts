import * as dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import router from './routes/index.routes';

const app = express()

app.use(router)
app.use(json())

export default app