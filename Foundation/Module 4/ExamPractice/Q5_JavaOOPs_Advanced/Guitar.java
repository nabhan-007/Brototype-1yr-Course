public class Guitar extends Instrument implements Playable {
    @Override
    public void tune() {
        System.out.println("Tuning Guitar");
    }

    @Override
    public void play() {
        System.out.println("Playing Guitar");
    }
}
