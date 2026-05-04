/*
Write a C program to count even numbers and count prime numbers in an array: {10, 7, 13, 18, 11, 20, 9}.
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
    int myArray[] = {10, 7, 13, 18, 11, 20, 9};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // counting even numbers and counting prime numbers
    int even_count = 0, prime_count = 0;
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            prime_count++;
        }
        if (myArray[i] % 2 == 0)
        {
            even_count++;
        }
    }
    printf("\nEven Numbers: %d", even_count);
    printf("\nPrime Numbers: %d", prime_count);

    return 0;
}