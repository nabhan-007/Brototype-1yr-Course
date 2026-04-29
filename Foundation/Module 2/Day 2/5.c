#include <stdio.h>

int main()
{
    int myArray[100] = {10, 15, 8, 21, 30, 9};
    int items = 6;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Odd numbers to `0`
    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 2 == 1)
        {
            myArray[i] = 0;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}