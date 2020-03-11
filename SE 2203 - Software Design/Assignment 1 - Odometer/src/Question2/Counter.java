package Question2;

public class Counter {

    private int counter;



    //Increases the counter by 1
    public void increase() {

        counter += 1;
    }

    //Decrease the counter by 1
    public void decrease() {

        counter -= 1;
    }

    public int getCount() {

        return counter;
    }

    public void setCount (int value){
        counter = value;
    }

    //Returns true if counter is 0, and false if it is not 0
    public boolean isZero() {
        boolean isZero;
        if (counter == 0) {
            isZero = true;
        } else {
            isZero = false;
        }

        return isZero;
    }

    //Returns counter as a string
    public String toString() {

        return Integer.toString(counter);
    }

}
