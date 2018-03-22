class TransactionPool {
  constructor() {
    this.transactions = [];
  }

  updateOrAddTransaction(transaction) {
    const transactionIndex = this.transactions.findIndex(
      t => t.id === transaction.id,
    );
    if (transactionIndex != -1) {
      this.transactions[transactionIndex] = transaction;
    } else {
      this.transactions.push(transaction);
    }
  }

  existingTransaction(address) {
    return this.transactions.find(t => t.input.address === address);
  }
}

module.exports = TransactionPool;
