#include <stdio.h>

int isPrime(int num)
{
    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return 0; // False
        }
    }
    return 1; // True
}

int main()
{
    int limit = 10;
    int myArray[10] = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11};

    for (int i = 0; i < limit; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = 0;
        }
    }

    for (int i = 0; i < limit; i++)
    {
        printf("%d ", myArray[i]);
    }
}