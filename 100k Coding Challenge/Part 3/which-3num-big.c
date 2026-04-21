#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, num2, num3;
    printf("Enter 3 Numbers: ");
    scanf("%d%d%d", &num1, &num2, &num3);

    if (num1>num2) {
        if (num1>num3) {
            printf("The Bigger Number: %d", num1);
        } else {
            printf("The Bigger Number: %d", num3);
        }
    } else {
        if (num2>num3) {
            printf("The Bigger Number: %d", num2);
        } else {
            printf("The Bigger Number: %d", num3);
        }
    }
}