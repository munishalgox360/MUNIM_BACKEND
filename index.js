import 'dotenv/config.js';
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
import { createServer } from 'https';
import DBConnection from './config/DBconnect.js';
import routes from './routes/index.js';
import path from 'path';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import {serve, setup} from 'swagger-ui-express';
import options from './config/swaggerOption.js';
const swaggerSpec = swaggerJSDoc(options);

const app = express();
const PORT = process.env.PORT || 8810;

app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');
app.use(express.static('uploads'))
app.use(morgan('dev'));

/**
 * @swagger
 * /:
 *  get:
 *      summary: Server is listening or not 
 *      description: This is index route for checking Server is listening or not     
 *      tags:
 *        - USERS 
 *      responses:
 *              200:
 *                  description: Use for Sever Status
 * */ 
app.get('/', function(req,res){
    res.status(200).render('index');
})

app.use('/api',routes);
app.use('/api-docs', serve, setup(swaggerSpec));


// Load SSL certificates
const privateKey = fs.readFileSync('/etc/letsencrypt/live/kambojproperty.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/kambojproperty.com/fullchain.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/kambojproperty.com/chain.pem', 'utf8'); 

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

createServer(credentials, app).listen(PORT, ()=> console.log(`MUNIM's Server Listening (${PORT})`));
// createServer(app).listen(PORT, ()=> console.log(`MUNIM's Server Listening (${PORT})`));





