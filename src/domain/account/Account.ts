import { Transaction } from './Transaction';

export class Account {
    constructor(public id: number, public balance: number, public transactionHistory : Transaction[]) {}
  
    deposit(amount: number): void {
      if (amount > 0.01) {
        this.balance += amount;
      } else {
        throw new Error("Le montant du dépôt doit être supérieur à 0.01");
      }
    }
  
    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        throw new Error("Le solde du compte est insuffisant");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    getTransactionHistory(): any {
      // TODO: Implementer cette méthode
    }
  }