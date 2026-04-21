#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, num2, sum;

    printf("Enter 2 Numbers: ");
    scanf("%d%d", &num1, &num2);

    sum = num1 + num2;
    printf("Sum of %d and %d is: %d", num1, num2, sum);
}