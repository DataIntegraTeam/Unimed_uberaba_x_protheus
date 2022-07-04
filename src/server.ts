// import 'dotenv/config';
import express, { RequestHandler } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { router } from './routes';
import swaggerDoc from './swagger.json';

const cron = 'node-cron';

const app = express();
app.use(cors());

app.use(cron);

app.use(express.json({ limit: '1000mb' }) as RequestHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(router);

app.listen(8282, () => console.log('Server is running!'));
