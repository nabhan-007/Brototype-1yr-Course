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
    int myArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Prime numbers: 0 and Even numbers: 1
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

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}