#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, num2;
    printf("Enter 2 Numbers: ");
    scanf("%d%d", &num1, &num2);

    if (num1>num2) {
        printf("The Bigger Number: %d", num1);
    } else {
        printf("The Bigger Number: %d", num2);
    }
}