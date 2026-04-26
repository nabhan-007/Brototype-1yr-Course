#include <stdio.h>

int main() {
    char name[100];
    char prefix[] = "Programmer";

    printf("Enter your Name: ");
    scanf("%s", name); // Can also use `gets(name);` but, UNSAFE!!

    printf("%s %s\n", prefix, name);

    return 0;
}
