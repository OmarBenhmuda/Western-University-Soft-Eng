package Question1;

public interface ConsoleDisplayInterface<T> {

    //To reset the counter to the minimum value
    public void reset();

    //To increase the value on the counter
    public void increase();

    //To get the value of the wheel
    public T getWheelValue(int theWheel);

    //Returns the integer value of wheels in use
    public int getWheelsInUse();


}
