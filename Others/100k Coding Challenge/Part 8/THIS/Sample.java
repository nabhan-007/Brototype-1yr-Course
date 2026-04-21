package THIS;

public class Sample {
    int a=100, b=200;

    Sample(int a, int b) {
        System.out.println("a: "+a+"\tb: "+b);
        a = this.a; // Assigning the value of the global `a` to the local function `a`
        b = this.b; // Assigning the value of the global `b` to the local function `b`
        System.out.println("a: "+a+"\tb: "+b);
    }
}
