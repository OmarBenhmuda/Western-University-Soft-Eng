//  Omar Benhmuda
//  215029089

package SE2203b.Lab1;

public class CheckingAccount extends BankAccount {

    private double fee;

    public CheckingAccount(String name, double amount, double fee) {

        super(name, amount);
        setAccountNumber(getAccountNumber() + "-CA");
        this.fee = fee;

    }

    @Override
    public boolean withdraw(double amount) {
        boolean completed = true;

        if (amount <= super.getBalance()) {
            if (amount >= 100) {
                super.setBalance(super.getBalance() - (amount + fee));
            } else {
                super.setBalance(super.getBalance() - amount);
            }
            completed = true;
        } else {
            completed = false;
        }
        return completed;


    }
}
