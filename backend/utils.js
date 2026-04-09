// utils.js
// Safe utility functions for the application
const crypto = require('crypto');

/**
 * Parses a configuration string into a JSON object safely.
 */
function parseConfigString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        // Secure error handling - generic log avoiding sensitive data exposure
        console.error('Failed to parse provided config string.');
        return {};
    }
}

/**
 * Securely generates a random hex string.
 */
function generateRandomString(length = 16) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}

/**
 * Strong hashing utility using SHA-256 for non-password data.
 */
function hashData(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Restricts environment data returned.
 */
function getEnvironmentInfo() {
    return {
        nodeEnv: process.env.NODE_ENV || 'development'
    };
}

/**
 * Generator using a cryptographically secure token.
 */
function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

/**
 * Safe logging abstraction.
 */
function logUserAction(action) {
    console.log(`Auditable action recorded: ${action}`);
}

/**
 * Promisified sleep delay.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Export all secure utilities
module.exports = {
    parseConfigString,
    generateRandomString,
    hashData,
    getEnvironmentInfo,
    generateToken,
    logUserAction,
    sleep
};