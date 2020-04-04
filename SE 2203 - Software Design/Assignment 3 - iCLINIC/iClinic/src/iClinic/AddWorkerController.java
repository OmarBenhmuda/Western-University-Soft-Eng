package iClinic;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

import java.net.URL;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class AddWorkerController implements Initializable {

    ObservableList<String> roles = FXCollections.observableArrayList("Administrator", "Physician");
    ObservableList<String> professions = FXCollections.observableArrayList("Doctor", "Nurse");

    @FXML
    Button cancelButton;
    @FXML
    Button saveButton;
    @FXML
    TextField nameTextField;
    @FXML
    TextField accountNameTextField;
    @FXML
    TextField passwordTextField;
    @FXML
    ChoiceBox roleChoiceBox;
    @FXML
    ChoiceBox professionChoiceBox;

    WorkerAdapter workerAdapter;


    @FXML
    public void cancel() throws Exception {


        Stage stage = (Stage) cancelButton.getScene().getWindow();
        stage.close();
    }

    @FXML
    public void save() throws SQLException {
        Stage stage = (Stage) saveButton.getScene().getWindow();
        stage.close();

        workerAdapter.insertWorker(
                nameTextField.getText(),
                roleChoiceBox.getSelectionModel().getSelectedItem().toString(),
                professionChoiceBox.getSelectionModel().getSelectedItem().toString(),
                accountNameTextField.getText(),
                passwordTextField.getText());


    }

    public void setModel(WorkerAdapter worker) {
        workerAdapter = worker;
    }

    @FXML
    public void initialize(URL url, ResourceBundle rb) {
        roleChoiceBox.setItems(roles);
        professionChoiceBox.setItems(professions);
    }
}
