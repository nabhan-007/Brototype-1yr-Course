#include <stdio.h>

int main()
{
    int num1, num2, num3, average = 0;
    printf("Enter three numbers: ");
    scanf("%d", &num1);
    scanf("%d", &num2);
    scanf("%d", &num3);

    average = (num1 + num2 + num3) / 3;
    printf("Average of %d, %d and %d is %d", num1, num2, num3, average);

    return 0;
}