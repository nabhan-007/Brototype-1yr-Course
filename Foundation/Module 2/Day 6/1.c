/*
Write a C program to replace all multiples of 4 with 0, then find the sum of remaining (non-zero) elements. Array: {12, 7, 16, 9, 20, 11, 8}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {12, 7, 16, 9, 20, 11, 8};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // replacing all multiples of 4 with 0 and finding the sum of remaining (non-zero) elements
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 4 == 0)
        {
            myArray[i] = 0;
        }
        else
        {
            sum += myArray[i];
        }
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Printing the sum
    printf("\nsum of remaining (non-zero) elements: %d", sum);

    return 0;
}