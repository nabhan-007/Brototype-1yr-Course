/*
Write a C program to replace all prime numbers with -1, then delete all negative numbers: {7, 12, 13, 18, 11, 20, 9}.
*/
#include <stdio.h>

int isPrime(int num)
{
    if (num <= 1)
        return 0;
    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return 0;
        }
    }
    return 1;
}

int main()
{
    int myArray[] = {7, 12, 13, 18, 11, 20, 9};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // replacing all prime numbers with -1
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = (-1);
        }
    }
    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    // deleting all negative numbers
    // Optimized!!
    int write_index = 0;
    for (int read_index = 0; read_index < length; read_index++)
    {
        if (myArray[read_index] >= 0)
        {
            myArray[write_index] = myArray[read_index];
            write_index++;
        }
    }
    length = write_index;

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}