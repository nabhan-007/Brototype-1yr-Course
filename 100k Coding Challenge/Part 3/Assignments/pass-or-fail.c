#include <stdio.h>

int main() {
    float mark;

    printf("Enter the Mark: ");
    scanf("%f", &mark);

    if (mark >= 50) {
        printf("Passed");
    } else {
        printf("Better Luck Next Time...");
    }

    return 0;
}