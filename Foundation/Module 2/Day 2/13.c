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
        if (myArray[i] % 2 != 0)
        {
            myArray[i] = 0;
        }
        // Another if to count `0` that's in the orginal array
        if (myArray[i] == 0)
        {
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