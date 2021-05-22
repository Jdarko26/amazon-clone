import jwt from 'jsonwebtoken';


export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'entersomethingsecret', {
        expiresIn: '30d',
    });
};


export const isAuth = (req, res, next) => {
    const authorization = req.header.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.lenth);
        jwt.verify(token, process.env.JWT_SECRET || 'entersomethingsecret', (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Invalid Token' });
            } else { 
                req.user = decode;
                next();
                //0263769989,
               // 0277438644

                 
            }
        });
        
    } else {
         res.status(401).send({ message: 'No Token' });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
         res.status(401).send({ message: 'Invalid Admin Token' });
    }
};