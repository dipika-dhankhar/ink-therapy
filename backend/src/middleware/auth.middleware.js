const authService = require('../routes/auth/auth.service');

const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const user = authService.getUserByToken(token);

  if (!user) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  req.user = user;
  next();
};

module.exports = { requireAuth };
