const authService = require('./auth.service');

const isEmail = (value) => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const register = (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (typeof name !== 'string' || !name.trim()) {
      throw authService.createError(400, 'Name is required');
    }
    if (!isEmail(email)) {
      throw authService.createError(400, 'A valid email is required');
    }
    if (typeof password !== 'string' || password.length < 8) {
      throw authService.createError(400, 'Password must be at least 8 characters');
    }

    res.status(201).json(authService.register({ name, email, password }));
  } catch (error) {
    next(error);
  }
};

const login = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!isEmail(email) || typeof password !== 'string' || !password) {
      throw authService.createError(400, 'Email and password are required');
    }

    res.json(authService.login({ email, password }));
  } catch (error) {
    next(error);
  }
};

const me = (req, res) => {
  res.json({ user: req.user });
};

module.exports = { register, login, me };
