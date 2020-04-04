package sample;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class Main extends Application {


    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        Parent root = FXMLLoader.load(getClass().getResource("iCLINIC.fxml"));
        primaryStage.setTitle("iCLINIC");
        primaryStage.getIcons().add(new Image("WesternLogo.png"));
        root.getStylesheets().addAll(this.getClass().getResource("Background.css").toExternalForm());
        primaryStage.setScene(new Scene(root, 640, 480));
        primaryStage.show();

    }
}
