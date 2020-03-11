//  Omar Benhmuda
//  215029089

package SE2203b.Lab1;

public class SavingsAccount extends BankAccount {

    private double rate;
    private int savingsNumber = 0;
    private String accountNumber;

    public SavingsAccount(String name, double balance, double rate) {
        super(name, balance);
        this.rate = rate;


    }

    public SavingsAccount(SavingsAccount oldAccount, double balance) {
        super(oldAccount, balance);
        savingsNumber += 1;
    }

    public void postInterest() {

        setBalance((getBalance() * rate) + getBalance());

    }

    @Override
    public String getAccountNumber() {

        accountNumber = super.getAccountNumber() + "-S" + savingsNumber;
        return accountNumber;
    }
}
