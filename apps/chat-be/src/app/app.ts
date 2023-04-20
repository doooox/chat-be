import * as cors from "cors"
import * as express from 'express'
import router from "../routes/routes";
import connectDB from '../services/config/db';
import { socket } from "../services/config/socketService";
import { corsOptions } from '../utils/static';

export const createApp = () => {

  connectDB()
  const app = express();
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api', router);

  return app
}

export const createAppWithSockets = () => {
  connectDB();

  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', router);

  socket(app)
  return app;
};
