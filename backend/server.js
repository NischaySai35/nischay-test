// 🚨 VULNERABLE DEMO SERVER (FOR ANALYZER TESTING ONLY)

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

// 🔴 Hardcoded secrets
const JWT_SECRET = "super_secret_key_123456";
const API_KEY = "sk_live_ABC123SECRET";
const DB_PASSWORD = "admin123";

// 🔴 Overly permissive CORS
app.use(cors({ origin: "*" }));

// 🔴 No size limits (DoS risk)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔴 Logging sensitive info
app.use((req, res, next) => {
    console.log("Headers:", req.headers); // leaks tokens
    console.log("Body:", req.body);       // leaks passwords
    next();
});

// 🔴 Debug mode flag
const DEBUG = true;

// 🔴 Health endpoint leaking internals
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        env: process.env,          // 🚨 leaks environment
        secret: JWT_SECRET,        // 🚨 exposes secret
        timestamp: new Date()
    });
});

// 🔴 Weak token generation
app.get('/token', (req, res) => {
    const token = Math.random().toString(); // predictable
    res.json({ token });
});

// 🔴 Weak hashing
app.get('/hash', (req, res) => {
    const input = req.query.input || "test";
    const hash = crypto.createHash('md5').update(input).digest('hex'); // weak
    res.json({ hash });
});

// 🔴 No authentication on sensitive action
app.post('/api/delete-user', (req, res) => {
    const { userId } = req.body;
    res.json({ message: `User ${userId} deleted` }); // no auth check
});

// 🔴 Insecure file access (path issues)
app.get('/read-file', (req, res) => {
    const file = req.query.file;
    res.json({ message: `Pretend reading file: ${file}` });
});

// 🔴 Sensitive config exposed
app.get('/config', (req, res) => {
    res.json({
        dbPassword: DB_PASSWORD,
        apiKey: API_KEY,
        jwt: JWT_SECRET
    });
});

// 🔴 Fake JWT (not signed properly)
app.get('/jwt', (req, res) => {
    const user = req.query.user || "guest";
    const token = `${user}.${JWT_SECRET}.signature`;
    res.json({ token });
});

// 🔴 User list (no protection)
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice', password: 'alice123' },
        { id: 2, name: 'Bob', password: 'bob123' }
    ]);
});

// 🔴 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found', path: req.url });
});

// 🔴 Error handler leaking stack
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack // 🚨 info leak
    });
});

// Startup logs (harmless)
app.listen(port, () => {
    console.log(`🚨 Vulnerable server running on port ${port}`);
});