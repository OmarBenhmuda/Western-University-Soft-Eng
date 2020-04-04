/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package iClinic;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.MenuBar;
import javafx.scene.image.Image;
import javafx.stage.Modality;
import javafx.stage.Stage;

import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;


/**
 * @author Omar Benhmuda
 */
public class MainController implements Initializable {


    private WorkerAdapter workers;
    private Connection conn;


    @FXML
    private MenuBar mainMenu;

    public void showAbout() throws Exception {

        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("About.fxml"));
        Parent About = (Parent) fxmlLoader.load();

        Scene scene = new Scene(About);
        Stage stage = new Stage();
        stage.setScene(scene);
        stage.getIcons().add(new Image("file:src/iClinic/WesternLogo.png"));
        stage.setTitle("About Us");
        stage.initModality(Modality.APPLICATION_MODAL);
        stage.show();
    }

    public void exit() {

        Stage stage = (Stage) mainMenu.getScene().getWindow();
        stage.close();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }

    public void addNewWorker() throws Exception {

        workers = new WorkerAdapter(conn, false);
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("AddWorker.fxml"));
        Parent AddWorker = (Parent) fxmlLoader.load();

        AddWorkerController addWorkerController = fxmlLoader.getController();
        addWorkerController.setModel(workers);

        Scene scene = new Scene(AddWorker);
        Stage stage = new Stage();


        stage.setScene(scene);
        stage.getIcons().add(new Image("file:src/TennisBallGames/WesternLogo.png"));
        stage.setTitle("Add Worker");
        stage.initModality(Modality.APPLICATION_MODAL);

        stage.show();
    }

    public void modifyWorker() throws Exception {

        workers = new WorkerAdapter(conn, false);

        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("ModifyWorker.fxml"));
        Parent ModifyWorker = (Parent) fxmlLoader.load();


        ModifyWorkerController modifyWorkerController = fxmlLoader.getController();
        modifyWorkerController.setModel(workers);


        Scene scene = new Scene(ModifyWorker);
        Stage stage = new Stage();

        stage.setScene(scene);
        stage.getIcons().add(new Image("file:src/TennisBallGames/WesternLogo.png"));
        stage.setTitle("Modify Worker");
        stage.initModality(Modality.APPLICATION_MODAL);

        stage.show();
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {

        try {
            // Create a named constant for the URL
            // NOTE: This value is specific for Java DB
            String DB_URL = "jdbc:derby:WorkerDB;create=true";
            // Create a connection to the database
            conn = DriverManager.getConnection(DB_URL);

        } catch (SQLException ex) {
            displayAlert(ex.getMessage());
        }

    }
}

