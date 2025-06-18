"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    if (token === 'autenticado')
        next();
    else
        res.status(500).json({ message: 'quien sos puto' });
};
exports.default = auth;
