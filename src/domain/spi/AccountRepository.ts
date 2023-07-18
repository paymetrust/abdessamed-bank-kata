import { Account } from "../account/Account";

interface AccountRepository {
    getAccount(id: number): Account;
    saveAccount(account: Account): void;
  }