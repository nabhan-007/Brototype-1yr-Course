public class Hello {
    int a = 10;
    static int b = 20; // Can be called like normal or `h*.b`

    public static void main(String[] args) throws Exception {
        System.out.println("Hello World!!");

        Hello h = new Hello();
        System.out.println("h.a: " + h.a);
        System.out.println("h.b: " + b);

        h.hello();
        world();

        // In case of static the latest assigned value will be it's value
        Hello h1 = new Hello();

        h1.a = 100;
        h1.b = 200; // Since `b` is static no need of `*.` calling

        System.out.println("h1.a: " + h1.a);
        System.out.println("h1.b: " + h1.b);

        h.b = 100; // Changing `h` not `h1`. Still `b` will change for `h1.b`
        System.out.println("h.b: " + h.b);
        System.out.println("h1.b: " + h1.b);
    }

    void hello() {
        System.out.println("Hello");
    }

    static void world() {
        System.out.println("World");
    }
}
