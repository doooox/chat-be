import * as cors from "cors"
import * as express from 'express'
import session = require("express-session");
import router from "../routes/routes";
import connectDB from '../services/config/db';
import { corsOptions } from '../utils/static';

export const createApp = () => {


  connectDB()
  const app = express();
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(
    session({
      name: 'session',
      secret: process.env.NX_SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 3,
        httpOnly: true,
      },
    })
  );
  app.use('/api', router);

  return app
}
