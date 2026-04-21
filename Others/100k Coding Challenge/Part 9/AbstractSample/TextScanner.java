package AbstractSample;

public class TextScanner {
    Hello obj;

    public TextScanner(Hello obj) {
        this.obj = obj;
    }

    void scan() {
        String scannedText = "Scanned Text Data";
        obj.onText(scannedText);
    }
}
