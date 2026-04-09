// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Basic health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Example route definition
app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Listening for incoming requests...`);
    console.log(`Additional startup text 1`);
    console.log(`Additional startup text 2`);
    console.log(`Additional startup text 3`);
    console.log(`Additional startup text 4`);
    console.log(`Additional startup text 5`);
    console.log(`Ready to serve clients.`);
});
