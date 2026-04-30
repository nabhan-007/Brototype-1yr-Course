#include <stdio.h>

int isPrime(int num)
{
    if (num <= 1)
        return 0;
    for (int j = 2; j < num; j++)
    {
        if (num % j == 0)
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

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting all prime numbers
    for (int i = 0; i < length; i++)
    {
        if (isPrime(myArray[i]))
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            i -= 1;
            length -= 1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}