#include <stdio.h>
#include <stdlib.h>

int main()
{
    float num1, num2, num3, average;

    printf("Enter 3 Numbers: ");
    scanf("%f%f%f", &num1, &num2, &num3);

    average = (num1 + num2 + num3) / 3;
    printf("Average: %f", average);
}