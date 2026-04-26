#include <stdio.h>

int main()
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            for (int k = 1; k <= 2 * i; k++)
            {
                printf("* ");
            }
            printf("\n");
        }
        if (i < 3)
        {
            printf("*\n*\n*");
        }
        printf("\n");
    }
}