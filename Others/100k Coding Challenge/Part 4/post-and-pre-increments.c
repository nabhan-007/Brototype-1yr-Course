#include <stdio.h>

int main() {
    int a, b, c;

    printf("Hello World!!\n");
    a = 10;
    b = a++; // Post
    c = ++a; // Pre
    printf("a: %d\na++: %d\n++a: %d", a, b, c);
}