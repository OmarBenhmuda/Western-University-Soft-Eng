package sample;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

public class BeautifulFlowersController implements Initializable {

    @FXML
    private ImageView flowersImageView;
    @FXML
    private Label flowersNote;
    @FXML
    private RadioButton roseRadioButton;
    @FXML
    private RadioButton callaLilyRadioButton;
    @FXML
    private RadioButton cannaRadioButton;
    @FXML
    private RadioButton bleedingHeartRadioButton;
    @FXML
    private RadioButton cherryBlossomRadioButton;
    // ADD LINES FOR TASK #3 HERE
    // Declare private fields for the images

    private Image rose;

    private Image callaLily;

    private Image canna;

    private Image bleedingHeart;

    private Image cherryBlossom;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        rose = new Image("Rose.gif");
        callaLily = new Image("Calla Lily.gif");
        canna = new Image("Canna.gif");
        bleedingHeart = new Image("Bleeding Heart.gif");
        cherryBlossom = new Image("Cherry Blossom.gif");

        // ADD LINES FOR TASK #3 HERE
        // Load the image files in the initialize method
    }


    public void roseRadioButtonListener() {
        if (roseRadioButton.isSelected()) {

            flowersImageView.setImage(rose);
            flowersNote.setText("This beautiful flower and\n" +
                    "symbol of love belongs the\n" +
                    "genus Rosa. The family name\n" +
                    "of this flower is Rosaceae and\n" +
                    "it contains different other\n" +
                    "species in almost all parts of\n" +
                    "the world. The lower of rose\n" +
                    "vary in size from each other\n" +
                    "depending upon the species to\n" +
                    "which they belong. A large\n" +
                    "number of species of this\n" +
                    "flower are found in different\n" +
                    "parts of Asia.");
        }
    }

    public void callaLilyRadioButtonListener() {
        if (callaLilyRadioButton.isSelected()) {
            flowersImageView.setImage(callaLily);
            flowersNote.setText("One simple and common name of\n" +
                    "this beautiful flower is arum\n" +
                    "lily and this flowering plant\n" +
                    "belongs to the family known as\n" +
                    "Araceae. This flowering plant\n" +
                    "is grown well in areas which\n" +
                    "have reasonable rainfall and\n" +
                    "moderate temperatures.");
        }
    }

    public void cannaRadioButtonListener() {
        if (cannaRadioButton.isSelected()) {
            flowersImageView.setImage(canna);
            flowersNote.setText("This beautiful flowering plant\n" +
                    "belongs to a genus that contain\n" +
                    "around 10 species and its family\n" +
                    "is known as Cannaceae. This flower\n" +
                    "plant also provides large quantity\n" +
                    "of starch which is further used\n" +
                    "for different purposes. This flower\n" +
                    "is mostly found in tropical regions\n" +
                    "of the world. The flowers of this\n" +
                    "plant have three sepals and three petals.");
        }
    }

    public void bleedingHeartRadioButtonListener() {
        if (bleedingHeartRadioButton.isSelected()) {
            flowersImageView.setImage(bleedingHeart);
            flowersNote.setText("The bleeding heart flower belongs\n" +
                    "to the family known as Papaveraceae.\n" +
                    "This heart shaped flower is famous\n" +
                    "all over the world due to its unique\n" +
                    "beauty and is found in great numbers\n" +
                    "in Siberia and China. Blooming season\n" +
                    "of this flower starts in spring when\n" +
                    "there spread beautiful pink\n" +
                    "heart-shaped flowers in gardens.\n" +
                    "Lady-in-a-bath is also a common name\n" +
                    "of this flower.");
        }
    }

    public void cherryBlossomRadioButtonListener() {
        if (cherryBlossomRadioButton.isSelected()) {
            flowersImageView.setImage(cherryBlossom);
            flowersNote.setText("Cherry blossom, a beautiful flowering\n" +
                    "plant is found in different parts of\n" +
                    "the world including the Northern\n" +
                    "Hemisphere. It is found in those areas\n" +
                    "which have moderate climate. All\n" +
                    "species of this flowering plant do\n" +
                    "not produce cherries as there are\n" +
                    "special species of this flower that\n" +
                    "produce edible cherries. \n");
        }
    }

    // Repeat and modify the above handler for the rest of the other flowers.
}