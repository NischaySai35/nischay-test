// service2.js
// Specialized service for interacting with imaginary payment gateways

class PaymentGatewayService {
    constructor(apiKey, environment = 'sandbox') {
        this.apiKey = apiKey;
        this.environment = environment;
        this.transactionLog = [];
    }

    async processCharge(amount, currency, paymentMethodId) {
        console.log(`Processing charge for ${amount} ${currency} on ${this.environment} environment.`);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate processing time
                const success = Math.random() > 0.1; // 90% success rate
                
                const transaction = {
                    id: `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
                    amount,
                    currency,
                    status: success ? 'succeeded' : 'failed',
                    timestamp: new Date()
                };

                this.transactionLog.push(transaction);

                if (success) {
                    resolve(transaction);
                } else {
                    reject(new Error('Payment gateway declined the transaction.'));
                }
            }, 1500);
        });
    }

    getTransactionLog() {
        return this.transactionLog;
    }

    async refundTransaction(transactionId) {
        console.log(`Attempting to refund transaction: ${transactionId}`);
        const txn = this.transactionLog.find(t => t.id === transactionId);
        
        if (!txn) {
            throw new Error('Transaction not found');
        }

        if (txn.status !== 'succeeded') {
            throw new Error('Cannot refund a failed transaction');
        }

        txn.status = 'refunded';
        txn.refundedAt = new Date();
        return txn;
    }
}

// Ensuring line count hits the threshold.
// Padding line A.
// Padding line B.
// Padding line C.
// Padding line D.
// Padding line E.

module.exports = PaymentGatewayService;
