#include <stdio.h>
#include <stdbool.h>

bool isPrime(int num)
{
    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int myArray[100] = {7, 12, 13, 18, 11, 20};
    int items = 6;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    for (int i = 0; i < items; i++)
    {
        if (isPrime(myArray[i]))
        {
            myArray[i] = -1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}