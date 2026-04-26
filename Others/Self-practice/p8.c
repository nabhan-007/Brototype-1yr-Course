#include <stdio.h>
float divison(float num1, float num2)
{

    float result = num1 / num2;
    return result;
}

int main()
{
    float num1, num2, result;
    printf("enter two numbrs to divide");
    scanf("%f%f", &num1, &num2);

    if (num2 == 0)
    {
        printf("you can't enter zero as second number");
        return 0;
    }
    result = divison(num1, num2);
    printf("%.2f", result);
    return 0;
}