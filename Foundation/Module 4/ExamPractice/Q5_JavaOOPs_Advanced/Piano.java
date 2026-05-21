public class Piano extends Instrument implements Playable {
    @Override
    public void tune() {
        System.out.println("Tuning Piano");
    }

    @Override
    public void play() {
        System.out.println("Playing Piano");
    }
}
