/*
Write a C program to replace all elements at EVEN indices with 0 if the element at that index is ODD.
Array: {10, 15, 8, 7, 20, 9, 12, 3}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 8, 7, 20, 9, 12, 3};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    for (int i = 0; i < length; i++)
    {
        if (i % 2 == 0 && myArray[i] % 2 != 0)
        {
            myArray[i] = 0;
        }
    }

    // Printing the New Array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}
