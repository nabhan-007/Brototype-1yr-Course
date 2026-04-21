#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, num2, oprtr, output;

    printf("Enter 2 Numbers: ");
    scanf("%d%d", &num1, &num2);

    printf("\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nSelect Operator: ");
    scanf("%d", &oprtr);

    if (oprtr==1) {
        output = num1 + num2;
        printf("Output: %d", output);
    } else if (oprtr==2)
    {
        output = num1 - num2;
        printf("Output: %d", output);
    } else if (oprtr==3)
    {
        output = num1 * num2;
        printf("Output: %d", output);
    } else if (oprtr==4)
    {
        output = num1 / num2;
        printf("Output: %d", output);
    } else {
        printf("Invalid Operator!!");
    }
}