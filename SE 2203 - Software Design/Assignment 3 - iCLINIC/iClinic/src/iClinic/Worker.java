package iClinic;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public class Worker {

    private final StringProperty userID;
    private final StringProperty role;
    private final StringProperty profession;
    private final StringProperty accountName;
    private final StringProperty password;


    public Worker(String userID, String role, String profession, String accountName, String password) {
        this.userID = new SimpleStringProperty(userID);
        this.role = new SimpleStringProperty(role);
        this.profession = new SimpleStringProperty(profession);
        this.accountName = new SimpleStringProperty(accountName);
        this.password = new SimpleStringProperty(password);
    }


    public StringProperty getUserID() {
        return userID;
    }

    public StringProperty getName() {

        return accountName;
    }

    public StringProperty getRole() {
        return role;
    }

    public StringProperty getProfession() {
        return profession;
    }

    public StringProperty getPassword() {
        return password;
    }
}
