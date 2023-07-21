import { Account } from "src/domain/account/Account";
import { Transaction } from "src/domain/account/Transaction";
import { AccountRepository, FindAllTransactions } from "src/domain/spi/AccountRepository";


export class BankController {
  private readonly accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  getAccount(id: number): Account {
    return this.accountRepository.getAccount(id);
  }

  async saveAccount(account: Account): Promise<void> {
    await this.accountRepository.saveAccount(account);
  }

  async getAccountTransactions(accountId: number): Promise<FindAllTransactions> {
    return this.accountRepository.getAccountTransactions(accountId);
  }

  async saveTransaction(transaction: Transaction): Promise<void> {
    await this.accountRepository.saveTransaction(transaction);
  }

  async findAllTransactions(): Promise<FindAllTransactions> {
    return this.accountRepository.findAllTransactions();
  }

  async getAccountById(id: any): Promise<Account> {
    return this.accountRepository.getAccount(id);
  }

  async getAllAccountsOfACustomer(customerId: any): Promise<Account[]> {
    return this.accountRepository.getAllAccountsOfACustomer(customerId);
  }
}