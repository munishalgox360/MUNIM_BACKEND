import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
import { createServer } from 'http';
import DBConnection from './config/DBconnect.js';
import routes from './routes/index.js';
import morgan from 'morgan';
import path from 'path';



const app = express();
const PORT = process.env.PORT || 8810;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', function(req,res){
    res.render('index')
})

app.use('/api',routes);



createServer(app).listen(PORT, ()=> console.log(`MUNIM's Server Listening (${PORT})`));





