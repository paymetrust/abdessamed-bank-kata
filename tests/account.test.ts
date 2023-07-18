import { Account } from '../src/domain/account/Account';


it("should be able to deposit money", async () => {
    const account = new Account(1, 0,[]);
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  it("should not be able to deposit less than 0.01", async () => {
    const account = new Account(1, 0,[]);
    try {
      account.deposit(0.00);
      fail("Should have thrown an error");
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual("Le montant du dépôt doit être supérieur à 0.01");
      } else {
        console.log('Unexpected error', e);
      }
    }
  });

  it("should be able to withdraw money", async () => {
    const account = new Account(1, 100,[]);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });

  it("should not be able to withdraw more than the balance", async () => {
    const account = new Account(1, 100,[]);
    try {
      account.withdraw(200);
      fail("Should have thrown an error");
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toEqual("Le solde du compte est insuffisant");
      } else {
        console.log('Unexpected error', e);
      }
    }
  });

  it("should be able to get the balance", async () => {
    const account = new Account(1, 100,[]);
    expect(account.getBalance()).toEqual(100);
  });