/*
Write a C program to find the sum of all elements. If sum > 100, delete all odd numbers. If sum <= 100, delete all even numbers. Array: {10, 15, 8, 22, 7, 30, 12}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 8, 22, 7, 30, 12};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // finding the sum of all elements
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }
    // If sum > 100, delete all odd numbers. If sum <= 100, delete all even numbers
    if (sum <= 100)
    {
        int write_index = 0;
        for (int i = 0; i < length; i++)
        {
            if (myArray[i] % 2 != 0)
            {
                myArray[write_index] = myArray[i];
                write_index++;
            }
        }
        length = write_index;
    }
    else
    {
        int write_index = 0;
        for (int i = 0; i < length; i++)
        {
            if (myArray[i] % 2 == 0)
            {
                myArray[write_index] = myArray[i];
                write_index++;
            }
        }
        length = write_index;
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}