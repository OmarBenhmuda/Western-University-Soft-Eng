//  Omar Benhmuda
//  215029089

import java.util.Random;

public class RandomHello {
    public static void main(String[] args) {
        RandomHello randomHello = new RandomHello();
        System.out.println(randomHello.sayHello());
    }

    public String sayHello() {
        double RandomNum = Math.ceil(Math.random() * 5);

        if (RandomNum == 1) {
            return "Hello";
        }
        if (RandomNum == 2) {
            return "What's Up";
        }
        if (RandomNum == 3) {
            return "hi";
        }
        if (RandomNum == 4){
            return "Aloha";

        }
        else return "Hola";

    }
}
