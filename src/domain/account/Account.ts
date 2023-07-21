import { v4 as uuidv4 } from 'uuid';
import { Customer } from '../customer/Customer';
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

  getTransactions() : Transaction[]{
    return this.transactions;
  }

  getCustomer():Customer{
    return this.customer
  }

}