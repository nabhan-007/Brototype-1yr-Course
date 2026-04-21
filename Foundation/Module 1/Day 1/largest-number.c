#include <stdio.h>

int main()
{
    int num1 = 5, num2 = 10, num3 = 15;

    if (num1 > num2 && num1 > num3) {
        printf("Largest Number: %d", num1);
    } else if (num2 > num1 && num2 > num3) {
        printf("Largest Number: %d", num2);
    } else {
        printf("Largest Number: %d", num3);
    }

    return 0;
}