/*
Write a C program to replace all prime numbers with 0 and all even numbers with 1 in an array: {5, 8, 13, 18, 7, 20}. (If a number is both prime and even, replace with 0)
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
    int myArray[] = {5, 8, 13, 18, 7, 20};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Prime Numbers: 0 and Even Numbers: 1 (if both: 0)
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = 0;
        }
        else if (myArray[i] % 2 == 0)
        {
            myArray[i] = 1;
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
