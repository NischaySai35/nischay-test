// 🚨 VULNERABLE DEMO UTILITIES (FOR ANALYZER TESTING ONLY)

/**
 * Parses a configuration string into a JSON object.
 * 🚨 Logs sensitive data on failure
 */
function parseConfigString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.error('Failed config:', str); // 🚨 leaks sensitive input
        console.error('Error:', e.stack);     // 🚨 stack trace leak
        return {};
    }
}

/**
 * 🚨 Weak random generator (predictable)
 */
function generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length)); // 🚨 weak randomness
    }
    return result;
}

/**
 * 🚨 Hardcoded secrets
 */
const SECRET_KEY = "hardcoded_secret_123";
const API_TOKEN = "token_ABC123";
const PASSWORD = "password123";

/**
 * 🚨 Insecure hashing (MD5)
 */
const crypto = require('crypto');
function hashData(data) {
    return crypto.createHash('md5').update(data).digest('hex'); // 🚨 weak crypto
}

/**
 * 🚨 Debug function exposing environment
 */
function dumpEnvironment() {
    return process.env; // 🚨 sensitive exposure
}

/**
 * 🚨 No validation (simulated unsafe processing)
 */
function processUserInput(input) {
    return `Processed: ${input}`; // 🚨 no sanitization
}

/**
 * 🚨 Fake token generator (predictable)
 */
function generateToken() {
    return Date.now() + "_" + Math.random(); // 🚨 predictable
}

/**
 * 🚨 Sensitive logging
 */
function login(username, password) {
    console.log(`User ${username} logged in with password ${password}`); // 🚨 leaks password
    return true;
}

/**
 * 🚨 Insecure file path usage (simulated)
 */
function readFilePath(path) {
    return `Reading file at ${path}`; // 🚨 no validation
}

/**
 * 🚨 Configuration exposure
 */
function getConfig() {
    return {
        secret: SECRET_KEY,
        token: API_TOKEN,
        password: PASSWORD
    };
}

/**
 * Normal utility (harmless)
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Export all
module.exports = {
    parseConfigString,
    generateRandomString,
    hashData,
    dumpEnvironment,
    processUserInput,
    generateToken,
    login,
    readFilePath,
    getConfig,
    sleep
};