import express from 'express';
import { createServer } from 'http';
import DBConnection from './config/DBconnect.js';
import routes from './routes/index.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8810;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(morgan('combined'));

app.get('/', function(req,res){
    res.end('MUNIM SERVER LISTENING');
})

app.use('/api',routes);



createServer(app).listen(PORT, ()=> console.log(`MUNIM's Server Listening (${PORT})`));





