/*
Write a C program to delete all odd numbers from an array, then find the sum of remaining elements: {10, 15, 8, 21, 30, 9, 12}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 8, 21, 30, 9, 12};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // delete all odd numbers from the array
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 != 0)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }
    // finding the sum of all elements
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nSum: %d", sum);

    return 0;
}