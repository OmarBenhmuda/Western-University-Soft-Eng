package Question2;

import Question1.Rollable;

public class Wheel extends Counter implements Rollable<Integer> {


    Counter counter = new Counter();
    private int min;
    private int max;
    boolean lastRolledOver;


    public Wheel(int min, int max) {

        this.min = min;
        this.max = max;
        this.reset();
        lastRolledOver = false;
    }



    public void increase () {
        counter.increase();
        if (lastRolledOver){
            lastRolledOver = false;
        }
        if(counter.getCount() == max){
            reset();
        }
    }


    public void reset() {
        counter.setCount(min);
        lastRolledOver = true;
    }

    public boolean lastRolledOver() {
        return lastRolledOver;
    }

    public Integer getValue() {
        return counter.getCount();

    }
}
