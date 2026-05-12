public class TvAbstract {
    public static void main(String[] args) {
        TV remote = new TVRemote(); // Change `TV` to `TVRemote` to call `changeChannel()`
        remote.turnOn();
        remote.turnOff();
        // remote.changeChannel(5); // Not Work; bcuz, not defined in TV
    }
}

/*
 * The Code the users see
 */
abstract class TV {
    abstract void turnOn();

    abstract void turnOff();
}

/*
 * Below is the code we are trying to hide from users to avoid complexity. They
 * just have to know there are two methods they can call. That's it.
 */
class TVRemote extends TV {
    @Override
    void turnOn() {
        System.out.println("TV Turning ON...");
    }

    @Override
    void turnOff() {
        System.out.println("TV Turned OFF!!");
    }

    void changeChannel(int num) {
        System.out.println("Changing Channel to: " + num);
    }
}