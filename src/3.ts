class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  async deposit(amount) {
    let currentBalance = this.balance; // Read the shared resource
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate a delay
    this.balance = currentBalance + amount; // Write back to the shared resource
  }

  async withdraw(amount) {
    let currentBalance = this.balance; // Read the shared resource
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate a delay
    this.balance = currentBalance - amount; // Write back to the shared resource
  }

  getBalance() {
    return this.balance;
  }
}

async function main() {
  const account = new BankAccount(1000);

  // Start both transactions at the same time
  await Promise.all([account.deposit(500), account.withdraw(200)]);

  console.log(`Final balance is: $${account.getBalance()}`); // Should now reliably be $1300
}

main();
