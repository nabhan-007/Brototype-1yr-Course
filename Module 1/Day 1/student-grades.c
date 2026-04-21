#include <stdio.h>

int main() {
    float mark;

    printf("Enter the Mark: ");
    scanf("%f", &mark);

    if (mark < 60) {
        printf("Failed");
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