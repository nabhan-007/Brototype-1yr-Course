package InterfaceSample;

public class TextScanner {
    InnerHello obj;

    public TextScanner(InnerHello obj) {
        this.obj = obj;
    }

    void scan() {
        String scannedText = "Scanned Text Data";
        obj.onText(scannedText);
    }
}
