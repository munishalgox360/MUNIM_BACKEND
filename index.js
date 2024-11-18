import 'dotenv/config.js';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
import { createServer } from 'https';
import DBConnection from './config/DBconnect.js';
import routes from './routes/index.js';
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





