#include <stdio.h>

int main()
{
    int myArray[100] = {10, 15, 22, 30, 45, 18};
    int items = 6;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Multiples of 5 to `0`
    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 5 == 0)
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