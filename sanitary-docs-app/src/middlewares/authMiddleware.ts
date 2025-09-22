import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers['authorization']?.split(' ')[1];
    if (!token && req.session && req.session.token) {
        token = req.session.token;
    }
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid.' });
        }
        req.user = decoded;
        next();
    });
};

export default authMiddleware;