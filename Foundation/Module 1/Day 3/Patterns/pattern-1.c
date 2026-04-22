#include <stdio.h>

int main()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 1; j <= (5 - i); j++)
        {
            printf("%d ", ((j * 2) - 1));
        }
        printf("\n");
    }

    return 0;
}