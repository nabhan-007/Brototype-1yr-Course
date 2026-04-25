#include <stdio.h>

int isPrime(int);

int main()
{
    int num = 7;
    int result = isPrime(num);

    if (result)
    {
        printf("%d is a prime number", num);
    }
    else
    {
        printf("%d is NOT a prime number!!", num);
    }

    return 0;
}

int isPrime(int num)
{
    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
