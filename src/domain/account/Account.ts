import { v4 as uuidv4 } from 'uuid';
import { Customer } from '../customer/Customer';
import { TransactionType } from './TransactionType';
import { TransactionStatus } from './TransactionStatus';
import { Transaction } from './Transaction';

export class Account {
  id: any;
  customer: Customer;
  balance: number;
  transactions: Transaction[];
  constructor(customer: Customer, balance: number) {
    this.id = uuidv4();
    this.customer = customer;
    this.balance = balance;
    this.transactions = [];
  }
  
    getBalance(): number {
      return this.balance;
    }

    deposit(amount: number): void {
      if (amount > 0.01) {
        this.balance += amount;
        this.newTransaction(amount, TransactionType.Deposit, TransactionStatus.SUCCES);
      } else {
        this.newTransaction(amount, TransactionType.Deposit, TransactionStatus.FAILED);
        throw new Error("Le montant du dépôt doit être supérieur à 0.01");
      }
    }
  
    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.newTransaction(amount, TransactionType.Withdrawal, TransactionStatus.SUCCES);
      } else {
        this.newTransaction(amount, TransactionType.Withdrawal, TransactionStatus.FAILED);
        throw new Error("Le solde du compte est insuffisant");
      }
    }
  
    getTransactions() {
      return this.transactions;
    }
  
    private newTransaction(amount: number, type : TransactionType, status : TransactionStatus): number {
      return this.transactions.push(new Transaction(this.id, amount, type, new Date, status));
    }
  }