/*
Write a C program to find all prime numbers in an array and replace them with 0, then find the sum of the array. Array: {5, 8, 13, 9, 4, 17}.
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
    int myArray[] = {5, 8, 13, 9, 4, 17};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // find all prime numbers in an array and replace them with 0; find the sum of the array
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = 0;
        }
        sum += myArray[i];
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nSum of the Array: %d", sum);

    return 0;
}