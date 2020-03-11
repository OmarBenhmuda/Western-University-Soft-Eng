package Question2;

import Question1.ConsoleDisplayInterface;
import Question1.Rollable;


public class ConsoleDisplay<T> implements ConsoleDisplayInterface<T> {

    private Rollable[] wheelList;
    private int counter = 0;

    private int wheelNumber;


    private Object[] value;


    private boolean[] max;


    public ConsoleDisplay(Wheel firstWheel) {
        wheelNumber = 1;
        wheelList = new Rollable[wheelNumber];
        value = new Object[wheelNumber];
        max = new boolean[wheelNumber];
        wheelList[0] = firstWheel;
        for (int i = 0; i < wheelNumber; i++) {
            value[i] = wheelList[i].getValue();
        }
    }

    public ConsoleDisplay(Wheel firstWheel, Wheel secondWheel) {
        wheelNumber = 2;
        wheelList = new Rollable[wheelNumber];
        value = new Object[wheelNumber];
        max = new boolean[wheelNumber];
        wheelList[0] = firstWheel;
        wheelList[1] = secondWheel;
        for (int i = 0; i < wheelNumber; i++) {
            value[i] = wheelList[i].getValue();
        }
    }

    public ConsoleDisplay(Wheel firstWheel, Wheel secondWheel, Wheel thirdWheel) {
        wheelNumber = 3;
        wheelList = new Rollable[wheelNumber];
        value = new Object[wheelNumber];
        max = new boolean[wheelNumber];
        wheelList[0] = firstWheel;
        wheelList[1] = secondWheel;
        wheelList[2] = thirdWheel;
        for (int i = 0; i < wheelNumber; i++) {
            value[i] = wheelList[i].getValue();
        }
    }


    public void reset() {
        for (int i = 0; i < wheelNumber; i++) {
            wheelList[i].reset();
        }
    }


    @Override
    public void increase() {
        counter = 0;
        wheelList[0].increase();
        while (wheelList[counter].lastRolledOver() && counter < 3) {
            counter++;
            wheelList[counter].increase();
        }
    }

    public T getWheelValue(int theWheel) {
        return (T) wheelList[theWheel - 1].getValue();
    }


    public int getWheelsInUse() {
        int wheelsInUse = 0;
        for (int i = 0; i < wheelNumber; i++) {
            if (max[i]) {
                wheelsInUse++;
            }
        }
        return wheelsInUse;
    }
}
