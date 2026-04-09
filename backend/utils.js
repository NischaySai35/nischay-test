// ⚠️ DEMO UTILITIES (MODERATE RISK - FOR ANALYZER TESTING)

/**
 * Parses a configuration string into a JSON object.
 * ⚠️ Logs input on failure (could leak sensitive data)
 */
function parseConfigString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.warn('Invalid config string:', str); // ⚠️ potential data leak
        return {};
    }
}

/**
 * ⚠️ Uses Math.random (not secure for tokens)
 */
function generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * ⚠️ Weak hashing (not suitable for passwords)
 */
const crypto = require('crypto');
function hashData(data) {
    return crypto.createHash('sha1').update(data).digest('hex'); // ⚠️ outdated
}

/**
 * ⚠️ Exposes some environment info (limited)
 */
function getEnvironmentInfo() {
    return {
        nodeEnv: process.env.NODE_ENV,
        platform: process.platform
    };
}

/**
 * ⚠️ No strict validation
 */
function processUserInput(input) {
    return `Processed: ${input}`;
}

/**
 * ⚠️ Simple token generator (predictable)
 */
function generateToken() {
    return `${Date.now()}_${Math.random()}`;
}

/**
 * ⚠️ Logging user activity (avoid sensitive data)
 */
function logUserAction(username) {
    console.log(`User action by: ${username}`);
}

/**
 * ⚠️ File path usage without strict checks
 */
function readFilePath(path) {
    return `Accessing file: ${path}`;
}

/**
 * Safe utility
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Export
module.exports = {
    parseConfigString,
    generateRandomString,
    hashData,
    getEnvironmentInfo,
    processUserInput,
    generateToken,
    logUserAction,
    readFilePath,
    sleep
};