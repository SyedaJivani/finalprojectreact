import express from 'express';
import {router} from './routes/routes.js'
import dotenv from 'dotenv'
dotenv.config()
import { dbData } from './database/database.js';
// import { orderData } from './database/orderdb.js';
import cors from 'cors';

import bodyParser from 'body-parser';



const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(router);

dbData();






app.listen(process.env.PORT, () => {
    console.log('Example app listening on port',process.env.PORT)
  })