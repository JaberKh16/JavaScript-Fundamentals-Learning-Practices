/*
  JavaScript Class Inheritance (ES6)

  In JavaScript, classes use *prototypal inheritance* under the hood.
  The `extends` keyword creates a prototype chain between two classes.

  - `BankDocument` is the parent (base) class
  - `Account` is the child (derived) class
  - `Account` inherits all public methods and properties of `BankDocument`
  - The `super()` call invokes the parent class constructor

  Prototype Chain:
    accountInstance
      → Account.prototype
        → BankDocument.prototype
          → Object.prototype
            → null

  This allows shared behavior (methods) to live on the prototype,
  reducing memory usage and enabling reuse.
*/

class BankDocument {
  constructor(documentId, createdAt) {
    this.documentId = documentId;
    this.createdAt = createdAt;
  }

  printDocumentInfo() {
    console.log(
      `Document ID: ${this.documentId}, Created At: ${this.createdAt}`
    );
  }
}

class Account extends BankDocument {
  constructor(documentId, createdAt, accountNumber, balance) {
    // Call parent constructor
    super(documentId, createdAt);

    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient balance');
      return;
    }
    this.balance -= amount;
  }

  getAccountSummary() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
      documentId: this.documentId,
    };
  }
}

// Example usage
const account = new Account(
  'DOC-101',
  '2026-01-05',
  'ACC-9988',
  5000
);

account.deposit(1500);
account.withdraw(2000);

account.printDocumentInfo(); // inherited method
console.log(account.getAccountSummary());
