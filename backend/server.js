// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Proper CORS restrictions
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }));

// Payload size limitations to mitigate DoS
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Safe logging mechanism (avoids logging sensitive headers/body)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Safe health check (no internals leaked)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Safe mock endpoint (no passwords or sensitive data)
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

// Generic 404 handler (no path leakage)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Production-ready Error handler (no stack trace leaks)
app.use((err, req, res, next) => {
    console.error('An internal error occurred');
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is safely running on port ${port}`);
});