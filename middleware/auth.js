import JWT from 'jsonwebtoken';
import UserModel from '../models/user.schema.js';
import { sanitizeUser } from '../utils/common.js';



export async function loginToken(user){
    
    const payload = {
        user : user._id,
        role : user.role
    }

    const options = {
        expiresIn : '1d',
        issuer : 'Algox360'
    }

    const MUNIM_SECRET = process.env.MUNIM_SECRET_KEY;

    const loginToken = await JWT.sign(payload, MUNIM_SECRET, options);
    if(!loginToken)  return false;
    
    return loginToken;
};


export async function verifyUser(req, res, next) {

    const APP_SECRET = process.env.MUNIM_SECRET_KEY;
    const header = req.headers.authorization;
    if(!header) return res.sendStatus(401).json({ success : false, message : 'Unauthorize'})

    const [type, authToken] = header.split(" ");
    if(type !== 'bearer') return res.sendStatus(401).json({ success : false, message : 'Unauthorize'});
    
    const decode = await JWT.verify(authToken, APP_SECRET);
    if(!decode) return res.sendStatus(401).json({  success : false, message : 'Session Expired'});

    const user = await UserModel.findById(decode.user);
    req.user = sanitizeUser(user);
    next();
}



