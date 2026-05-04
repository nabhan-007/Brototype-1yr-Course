/*
Write a C program to insert an element at a specified position in an array, then print the updated array.
Array: {10, 20, 30, 40, 50}, Insert 99 at position 2 (0-indexed).
*/
#include <stdio.h>

int main()
{
    int myArray[100] = {10, 20, 30, 40, 50};
    int length = 5;
    int index_to_change = 2;
    int new_number = 99;

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    for (int i = 0; i < length; i++)
    {
        if (i == index_to_change)
        {
            for (int j = length + 1; j > i; j--)
            {
                myArray[j] = myArray[j - 1];
            }
            myArray[i] = new_number;
            length++;
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
