#include <stdio.h>

int main()
{
    int myArray[] = {7, 3, 2, 4, 6, 5, 1};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // -------------------------------
    int largest = myArray[0];
    for (int i = 1; i < length; i++)
    {
        if (largest < myArray[i])
        {
            largest = myArray[i];
        }
    }
    printf("\nLargest: %d", largest);
    int second_largest = myArray[0];
    for (int i = 0; i < length; i++)
    {
        if (second_largest != largest)
        {
            break;
        }
        second_largest = myArray[i];
    }

    for (int i = 0; i < length; i++)
    {
        if (myArray[i] > second_largest && myArray[i] < largest)
        {
            second_largest = myArray[i];
        }
    }
    printf("\nSecond Largest: %d", second_largest);
    // -------------------------------

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}