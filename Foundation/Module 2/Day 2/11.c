#include <stdio.h>

int main()
{
    int myArray[100] = {10, 15, 8, 21, 30, 9};
    int items = 6, sum = 0;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            myArray[i] = 1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
        sum += myArray[i];
    }
    printf("\nSum: %d", sum);

    return 0;
}