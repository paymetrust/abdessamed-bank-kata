import { TransactionType } from '../../domain/account/TransactionType';
import { TransactionStatus } from '../../domain/account/TransactionStatus';
import { Transaction } from '../../domain/account/Transaction';
import { Account } from 'src/domain/account/Account';

export class AccountController {

    constructor(private account: Account){}
   

    deposit(amount: number): void {
        if (amount > 0.01) {
          this.account.balance += amount;
          this.newTransaction(amount, TransactionType.Deposit, TransactionStatus.SUCCES);
        } else {
          this.newTransaction(amount, TransactionType.Deposit, TransactionStatus.FAILED);
          throw new Error("Le montant du dépôt doit être supérieur à 0.01");
        }
      }
    
      withdraw(amount: number): void {
        if (this.account.balance >= amount) {
          this.account.balance -= amount;
          this.newTransaction(amount, TransactionType.Withdrawal, TransactionStatus.SUCCES);
        } else {
          this.newTransaction(amount, TransactionType.Withdrawal, TransactionStatus.FAILED);
          throw new Error("Le solde du compte est insuffisant");
        }
      }
    
      getTransactions() {
        return this.account.transactions;
      }
    
      private newTransaction(amount: number, type : TransactionType, status : TransactionStatus): number {
        return this.account.transactions.push(new Transaction(this.account.id, amount, type, new Date, status));
      }
    
}