#include <stdio.h>

int main() {
    float mark;

    printf("Enter the Mark: ");
    scanf("%f", &mark);

    if (mark < 50) {
        printf("Failed");
    } else if (mark < 60) {
        printf("Grade: E");
    } else if (mark < 70) {
        printf("Grade: D");
    } else if (mark < 80) {
        printf("Grade: C");
    } else if (mark < 90) {
        printf("Grade: B");
    } else if (mark < 100) {
        printf("Grade: A");
    }

    return 0;
}