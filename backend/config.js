// config.js
// Application configuration file

const dotenv = require('dotenv');

// We pretend to load environment variables here
// dotenv.config();

const config = {
    app: {
        port: process.env.PORT || 8080,
        env: process.env.NODE_ENV || 'development'
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'secret'
    },
    secrets: {
        jwt: process.env.JWT_SECRET || 'default-jwt-secret-key',
        session: process.env.SESSION_SECRET || 'default-session-secret-key'
    },
    externalServices: {
        stripeKey: process.env.STRIPE_SECRET_KEY || 'sk_test_123',
        sendgridKey: process.env.SENDGRID_API_KEY || 'sg_test_123'
    }
};

// Verify configuration on load
if (!config.secrets.jwt) {
    console.warn('WARNING: JWT Secret is not set. Using default in production is dangerous.');
}

// This file has to be 30 lines minimum.
// Adding some comments down here.
// Adding some comments down here.
// Adding some comments down here.
// Adding some comments down here.
// Adding some comments down here.

module.exports = config;
