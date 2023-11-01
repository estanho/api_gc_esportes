import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { internalErrors } from './middlewares/errors/internal_errors';

const app = express();
const port = process.env.PORT || 3333;

const allowedOrigins = ['https://gc-esportes.web.app', 'http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origem não permitida pelo CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  exposedHeaders: 'Authorization',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.use(new internalErrors().syntaxError);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
