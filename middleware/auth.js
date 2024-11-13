import JWT from 'jsonwebtoken';

export async function loginToken(user){
    
    const payload = {
        username : user.user,
        company : user.company,
        email : user.email
    }

    const options = {
        expiresIn : '1d',
        issuer : 'Algox360'
    }

    const loginToken = await JWT.sign(payload, 'MunimAlgoX360', options);
    if(!loginToken)  return false;
    
    return loginToken;
};



