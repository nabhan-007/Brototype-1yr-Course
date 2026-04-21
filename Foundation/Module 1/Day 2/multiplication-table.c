#include <stdio.h>

int main()
{
    int n = 4;

    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", i, n, (i * n));
    }

    return 0;
}