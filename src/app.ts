import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/index.routes';

dotenv.config();

const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo da solicitação JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para analisar o corpo da solicitação com codificação de URL

app.use(router);

export default app;
