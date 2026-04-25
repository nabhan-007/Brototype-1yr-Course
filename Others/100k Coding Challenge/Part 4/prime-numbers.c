// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
#include <stdio.h>

int main()
{
    int i, j, flag, n = 27;

    // Check if n is prime
    flag = 0;
    for (i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            flag = 1;
            break;
        }
    }

    if (flag == 0 && n > 1)
    {
        printf("%d is a Prime Number\n", n);
    }
    else
    {
        printf("%d is NOT a Prime Number\n", n);
    }

    // Print all prime numbers up to n
    printf("Prime numbers up to %d:\n", n);

    for (i = 2; i <= n; i++)
    {
        flag = 0;

        for (j = 2; j * j <= i; j++)
        {
            if (i % j == 0)
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
        {
            printf("%d ", i);
        }
    }

    return 0;
}