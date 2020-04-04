package sample;

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.control.Button;

import javax.swing.*;
import java.awt.event.KeyEvent;
import java.net.URL;
import java.util.ResourceBundle;

public class iCLINIC implements Initializable {

    @FXML
    public Button okButton;


    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
    }


    public void CloseApp(javafx.event.ActionEvent actionEvent) {
        Platform.exit();
        System.exit(0);
    }

    public void okButtonClick(javafx.event.ActionEvent actionEvent) {

        // get a handle to the stage
        Stage stage = (Stage) okButton.getScene().getWindow();
        // do what you have to do
        stage.close();

    }


    public void OpenAU(ActionEvent actionEvent) throws Exception {
        Stage aboutUs = new Stage();
        Parent root = FXMLLoader.load(getClass().getResource("AboutUs.fxml"));
        aboutUs.initModality(Modality.APPLICATION_MODAL);
        aboutUs.getIcons().add(new Image("WesternLogo.png"));
        aboutUs.setTitle("About Us");
        aboutUs.setScene(new Scene(root, 300, 300));
        aboutUs.show();


    }
}
