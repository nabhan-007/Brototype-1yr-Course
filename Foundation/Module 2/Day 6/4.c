/*
Write a C program to find the average of all elements. If average > 15, delete all odd numbers. If average <= 15, delete all even numbers. Array: {10, 12, 8, 20, 15, 18}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 12, 8, 20, 15, 18};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // find the average of all elements
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }
    int average = sum / length;
    // If average > 15, delete all odd numbers. If average <= 15, delete all even numbers
    if (average <= 15)
    {
        for (int i = 0; i < length; i++)
        {
            if (myArray[i] % 2 == 0)
            {
                for (int j = i; j < length - 1; j++)
                {
                    myArray[j] = myArray[j + 1];
                }
                length--;
                i--;
            }
        }
    }
    else
    {
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
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}