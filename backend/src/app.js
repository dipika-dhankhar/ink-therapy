const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth/auth.routes');
const essaysRoutes = require('./routes/essays/essays.routes');
const { notFound, errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/essays', essaysRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
