#include <stdio.h>

/*
 * * * * * * * * * *
 * * * * * * * * * *
 * *
 * *
 * *
 * *
 * *
 * *
 * * * * * * * *
 * * * * * * * *
 * *
 * *
 * *
 * *
 * *
 * *
 */

int main()
{
    for (int i = 5; i >= 4; i--)
    {
        for (int j = 1; j <= 2; j++)
        {
            for (int k = 1; k <= (i * 2); k++)
            {
                printf("* ");
            }
            printf("\n");
        }

        for (int j = 1; j <= 12; j++)
        {
            printf("* ");
            if (j % 2 == 0)
            {
                printf("\n");
            }
        }
    }
}