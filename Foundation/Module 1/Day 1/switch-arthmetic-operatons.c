#include <stdio.h>

int main()
{
    int choice;
    float num1, num2, result;

    printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n");

    printf("Enter your choice (1-4): ");
    scanf("%d", &choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &num1, &num2);

    switch (choice)
    {
    case 1:
        result = num1 + num2;
        printf("Result: %.2f\n", result);
        break;

    case 2:
        result = num1 - num2;
        printf("Result: %.2f\n", result);
        break;

    case 3:
        result = num1 * num2;
        printf("Result: %.2f\n", result);
        break;

    case 4:
        result = num1 / num2;
        printf("Result: %.2f\n", result);
        break;

    default:
        printf("Invalid choice!!");
    }

    return 0;
}