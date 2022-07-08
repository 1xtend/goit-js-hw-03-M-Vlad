'use strict';

const transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    return {
      amount,
      type,
    };
  },

  deposit(amount) {
    const depositAction = (this.balance += amount);

    this.transactions.push(this.createTransaction(amount, transaction.DEPOSIT));

    return;
  },

  withdraw(amount) {
    let withdrawAction;

    if (amount > this.balance) {
      console.log('Зняття такої суми не можливо, недостатньо коштів');
      return;
    } else {
      withdrawAction = this.balance -= amount;
    }

    this.transactions.push(
      this.createTransaction(amount, transaction.WITHDRAW)
    );

    return;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions[id];
  },

  getTransactionTotal(type) {
    let totalAmount = 0;

    for (const element of this.transactions) {
      if (element['type'] === type) {
        totalAmount += element['amount'];
      }
    }

    return totalAmount;
  },
};

account.deposit(90);

account.withdraw(10);

console.log('Поточний баланс - ' + account.getBalance());

account.deposit(20);

account.withdraw(200);

account.withdraw(40);

console.log(account.getTransactionDetails(2));

console.log(
  'Кошти певного типу транзакції - ' + account.getTransactionTotal('deposit')
);

console.log(
  'Кошти певного типу транзакції - ' + account.getTransactionTotal('withdraw')
);

console.log('--------------');

console.log('Баланс - ' + account.balance);

console.table(account.transactions);
