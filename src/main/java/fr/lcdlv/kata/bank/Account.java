package fr.lcdlv.kata.bank;

public class Account {

    public static final Money MINIMUM_MONEY_ALLOWED = Money.of(0.01);

    private Money balance;
    private Transactions transactions;

    public Account(Money balance, Transactions transactions) {
        this.balance = balance;
        this.transactions = transactions;
    }

    public void deposit(Money money) throws MinimumMoneyAllowedException {
        if (isAllowed(money)) {
            throw new MinimumMoneyAllowedException();
        }
        balance = balance.add(money);
        recordDepositTransaction(money);
    }

    private void recordDepositTransaction(Money money) {
        Transaction transaction = new Transaction(money);
        transactions.record(transaction);
    }

    private boolean isAllowed(Money money) {
        return money.isLessThan(MINIMUM_MONEY_ALLOWED);
    }

    public void withdraw(Money money) throws OverdraftException {
        if (isOverdraft(money)) {
            throw new OverdraftException();
        }
        balance = balance.subtract(money);
        Transaction transaction = new Transaction(money.opposite());
        transactions.record(transaction);
    }

    private boolean isOverdraft(Money money) {
        return money.isBiggerThanOrEqualTo(balance);
    }

    public Money getBalance() {
        return balance;
    }

    public Transactions getHistory() {
        return transactions;
    }
}
