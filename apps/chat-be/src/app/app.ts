import * as cors from "cors"
import * as express from 'express'
import connectDB from '../services/config/db';
import { corsOptions } from '../utils/static';



export const createApp = () => {


  connectDB()
  const app = express();
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))


  return app
}
