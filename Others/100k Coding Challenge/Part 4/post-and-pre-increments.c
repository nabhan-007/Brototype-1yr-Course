#include <stdio.h>

int main() {
    int a, b, c;

    printf("Hello World!!\n");
    a = 10;
    b = a++; // Post-increment
    c = ++a; // Pre-increment
    printf("a: %d\na++: %d\n++a: %d", a, b, c);
}