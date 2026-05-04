/*
Write a C program to delete all prime numbers from an array, then sort the remaining elements in ascending order.
Array: {7, 12, 13, 18, 11, 20, 9}.
*/
#include <stdio.h>
#include <math.h>

int isPrime(int num)
{
    if (num <= 1)
        return 0;
    for (int i = 2; i <= (int)sqrt(num); i++)
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

    // Deleting all prime numbers
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }

    // Sorting the remaining elements in ascending order
    for (int i = 0; i < length; i++)
    {
        for (int j = 0; j < length - 1 - i; j++)
        {
            if (myArray[j] > myArray[j + 1])
            {
                int temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
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
