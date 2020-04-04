package iClinic;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class WorkerAdapter {

    Connection connection;

    public WorkerAdapter(Connection conn, Boolean reset) throws SQLException {
        connection = conn;

        if (reset) {
            Statement stmt = connection.createStatement();
            try {
                // Remove tables if database tables have been created.
                // This will throw an exception if the tables do not exist
                stmt.execute("DROP TABLE Workers");
                // then do finally
            } catch (SQLException ex) {
                // No need to report an error.
                // The table simply did not exist.
                // do finally to create it
            } finally {
                // Create the table of Matches
                stmt.execute("CREATE TABLE Workers ("
                        + "userID CHAR(100) NOT NULL PRIMARY KEY, "
                        + "role CHAR(100) NOT NULL, "
                        + "profession CHAR(100) NOT NULL, "
                        + "accountName CHAR(100) NOT NULL, "
                        + "password CHAR(100) NOT NULL "
                        + ")");

            }
        }

    }



    public void insertWorker(String userID, String role, String profession, String accountName, String password) throws SQLException {
        Statement stmt = connection.createStatement();
        stmt.executeUpdate("INSERT INTO Workers (userID, role, profession, accountName, password) "
                + "VALUES (" + userID + " , '" + role + "' , '" + profession + " , '" + accountName + " , '" + password + " )");
    }

    public ObservableList<String> getWorkerList() throws SQLException {
        ObservableList<String> workerList = FXCollections.observableArrayList();

        Statement stmt = null;

        String sqlStatement = "SELECT * from Workers";


        stmt = connection.createStatement();

        ResultSet rs = stmt.executeQuery(sqlStatement);

        while (rs.next()) {
            workerList.add(String.valueOf(new Worker
                    (
                            rs.getString("userID"),
                            rs.getString("role"),
                            rs.getString("profession"),
                            rs.getString("accountName"),
                            rs.getString("password")
                    ))
            );
        }
        return workerList;
    }
}


