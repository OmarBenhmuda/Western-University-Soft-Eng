package iClinic;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.stage.Modality;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class ModifyWorkerController<data> implements Initializable {

    final ObservableList<String> data = FXCollections.observableArrayList();
    ObservableList<String> roles = FXCollections.observableArrayList("Administrator", "Physician");
    ObservableList<String> professions = FXCollections.observableArrayList("Doctor", "Nurse");

    @FXML
    Button cancelButton;
    @FXML
    Button saveButton;
    @FXML
    ComboBox nameComboBox;
    @FXML
    TextField accountNameTextField;
    @FXML
    TextField passwordTextField;
    @FXML
    ChoiceBox roleChoiceBox;
    @FXML
    ChoiceBox professionChoiceBox;

    private WorkerAdapter workerAdapter;

    public void save() throws SQLException {
        Stage stage = (Stage) saveButton.getScene().getWindow();
        stage.close();
    }

    @FXML
    public void cancel() throws Exception {
        Stage stage = (Stage) cancelButton.getScene().getWindow();
        stage.close();
    }

    public void setModel(WorkerAdapter worker) {
        workerAdapter = worker;
        buildComboBoxData();
    }

    public void buildComboBoxData() {
        try {
            data.addAll(workerAdapter.getWorkerList());
        } catch (SQLException ex) {
            displayAlert("ERROR: " + ex.getMessage());
        }
    }


    private void displayAlert(String msg) {

        try {

            FXMLLoader loader = new FXMLLoader(getClass().getResource("Alert.fxml"));
            Parent ERROR = loader.load();
            AlertController controller = loader.getController();

            Scene scene = new Scene(ERROR);
            Stage stage = new Stage();
            stage.setScene(scene);

            stage.getIcons().add(new Image("file:src/TennisBallGames/WesternLogo.png"));
            controller.setAlertText(msg);
            stage.initModality(Modality.APPLICATION_MODAL);
            stage.showAndWait();

        } catch (IOException ex1) {

        }
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {

        nameComboBox.setItems(data);

    }

}


