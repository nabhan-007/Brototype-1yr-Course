/*
Write a C program to replace all prime numbers with -1, delete all negative numbers, then reverse the remaining array.
Array: {7, 12, 13, 18, 11, 20, 9}.
*/
#include <stdio.h>
#include <math.h>

int isPrime(int num)
{
    if (num <= 1)
    {
        return 0;
    }
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

    // replace all prime numbers with -1
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = (-1);
        }
    }

    // delete all negative numbers
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] == (-1))
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }

    // reverse the remaining array
    for (int i = 0; i < (length / 2); i++)
    {
        int temp = myArray[i];
        myArray[i] = myArray[length - 1 - i];
        myArray[length - 1 - i] = temp;
    }

    // printing the array
    printf("\nFinal Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}
