const crypto = require('crypto');

const users = new Map();
const sessions = new Map();

const createError = (status, message) => Object.assign(new Error(message), { status });

const hashPassword = (password, salt = crypto.randomBytes(16).toString('hex')) => {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password, stored) => {
  const [salt, hash] = stored.split(':');
  const candidate = Buffer.from(hashPassword(password, salt).split(':')[1], 'hex');
  return crypto.timingSafeEqual(candidate, Buffer.from(hash, 'hex'));
};

const publicUser = ({ id, name, email }) => ({ id, name, email });

const issueToken = (user) => {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, user.id);
  return token;
};

const register = ({ name, email, password }) => {
  const key = email.trim().toLowerCase();
  if (users.has(key)) throw createError(409, 'An account with this email already exists');

  const user = { id: crypto.randomUUID(), name: name.trim(), email: key, password: hashPassword(password) };
  users.set(key, user);

  return { user: publicUser(user), token: issueToken(user) };
};

const login = ({ email, password }) => {
  const user = users.get(email.trim().toLowerCase());
  if (!user || !verifyPassword(password, user.password)) {
    throw createError(401, 'Invalid email or password');
  }

  return { user: publicUser(user), token: issueToken(user) };
};

const getUserByToken = (token) => {
  const userId = sessions.get(token);
  if (!userId) return null;
  for (const user of users.values()) {
    if (user.id === userId) return publicUser(user);
  }
  return null;
};

module.exports = { register, login, getUserByToken, createError };
