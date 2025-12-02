const jwt = require('jsonwebtoken');


const secret = process.env.JWT_SECRET || 'change_this_secret';


function authMiddleware(req, res, next) {
const header = req.headers.authorization;
if (!header) return res.status(401).json({ error: 'No token' });
const token = header.split(' ')[1];
try {
const payload = jwt.verify(token, secret);
req.user = payload;
next();
} catch (err) {
return res.status(401).json({ error: 'Invalid token' });
}
}


module.exports = { authMiddleware, secret };