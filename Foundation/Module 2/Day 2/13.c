#include <stdio.h>

int main()
{
    int myArray[100] = {10, 15, 8, 21, 30, 9, 12};
    int items = 7, count = 0;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    for (int i = 0; i < items; i++)
    {
        if (myArray[i] % 2 == 1)
        {
            myArray[i] = 0;
            count += 1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nZero Count: %d", count);

    return 0;
}