import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notfound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const serverController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: `Car Wash Management Server is 🚀running🚀`,
  });
};

app.get('/', serverController);

//Not Found
app.use(globalErrorHandler);
app.use(notFound);

export default app;
