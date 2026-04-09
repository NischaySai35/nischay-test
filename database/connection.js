// connection.js
// Mock database connection script

class DatabaseConnection {
    constructor(config) {
        this.config = config;
        this.connected = false;
        this.connectionRetries = 0;
    }

    async connect() {
        console.log(`Attempting to connect to database at ${this.config.host}:${this.config.port}...`);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.8 && this.connectionRetries < 3) {
                    this.connectionRetries++;
                    console.log('Connection failed, retrying...');
                    reject(new Error('Connection timeout'));
                } else {
                    this.connected = true;
                    console.log('Database connected successfully!');
                    resolve(true);
                }
            }, 1000);
        });
    }

    disconnect() {
        if (this.connected) {
            console.log('Disconnecting from database...');
            this.connected = false;
            console.log('Disconnected.');
        } else {
            console.log('Already disconnected.');
        }
    }
}

const defaultConfig = { host: 'localhost', port: 27017 };
const db = new DatabaseConnection(defaultConfig);

// Extra line 1
// Extra line 2
// Extra line 3
// Extra line 4
// Extra line 5

module.exports = db;
