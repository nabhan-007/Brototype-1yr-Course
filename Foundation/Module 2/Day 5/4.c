/*
Write a C program to reverse an array, then delete all multiples of 3: {12, 15, 8, 9, 20, 7, 30}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {12, 15, 8, 9, 20, 7, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Reversing the array
    int from_left = 0, from_right = length - 1;
    while (from_left < from_right)
    {
        int temp = myArray[from_left];
        myArray[from_left] = myArray[from_right];
        myArray[from_right] = temp;

        from_left++;
        from_right--;
    }
    // Printing the Reversed arrays
    printf("\nReversed Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    // Deleting all multiples of 3
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 3 == 0)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
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