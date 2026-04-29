#include <stdio.h>

int main()
{
    int myArray[100] = {12, 7, 18, 9, 24, 11};
    int items = 6;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Even numbers to `0`
    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 2 == 0)
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