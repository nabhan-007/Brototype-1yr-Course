#include <stdio.h>

int main()
{
    for (int i = 100; i >= 1; i--)
    {
        printf("%d\n", i);
    }
    // ---------------------------------
    for (int i = 100; i >= 1; i--)
    {
        if (i % 5 == 0)
        {
            printf("%d\n", i);
        }
    }
    // ---------------------------------
    int a = 150, b = 180, c = 10;

    if (a > b)
    {
        if (a > c)
        {
            printf("%d", a);
        }
    }
    else if (b > a)
    {
        if (b > c)
        {
            printf("%d", b);
        }
    }
    else
    {
        printf("%d", c);
    }

    return 0;
}