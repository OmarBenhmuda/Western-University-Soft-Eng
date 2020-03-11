package Question1;

public interface Rollable<T> {

    //To reset the counter to the minimum value
    public void reset();

    //To increase the value on the counter
    public void increase();

    //To test whether the last increase caused a rollover
    public boolean lastRolledOver();

    //To return the value of the counter
    public T getValue();

}
