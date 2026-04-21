package AbstractSample;

public class Sample extends Hello {
    Sample() {
        TextScanner ts = new TextScanner(this);
        ts.scan();
    }

    void onText(String text) {
        System.out.println(text);
    }

    public static void main(String[] args) {
        Sample s = new Sample();
    }
}
