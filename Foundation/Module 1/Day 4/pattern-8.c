#include <stdio.h>

/*
 * *
 *
 *
 *
 * * * *
 * * * *
 *
 *
 *
 * * * * * *
 * * * * * *
 * * * * * *
 */

int main()
{
    for (int i = 1; i <= 12; i++)
    {
        for (int j = 1; j <= 6; j++)
        {
            if (j == 1 || i == 10 || i == 11 || i == 12)
            {
                printf("* ");
            }
            if (i == 1 && j == 2)
            {
                printf("* ");
            }
            if ((i == 5 || i == 6) && (j <= 3))
            {
                printf("* ");
            }
        }
        printf("\n");
    }
}