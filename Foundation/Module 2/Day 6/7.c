/*
Write a C program to replace all elements at ODD positions with 0 if the element is EVEN. Array: {10, 15, 8, 7, 20, 9, 12}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 8, 7, 20, 9, 12};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // If EVEN and at ODD position(index + 1); replace with `0`
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 == 0 && (i + 1) % 2 != 0)
        {
            myArray[i] = 0;
        }
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}