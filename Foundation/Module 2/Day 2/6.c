#include <stdio.h>

int main()
{
    int myArray[100] = {6, 15, 10, 9, 30, 25};
    int items = 6;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Multiples of 3 to `0`
    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 3 == 0)
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