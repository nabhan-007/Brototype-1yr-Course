#include <stdio.h>

/*
 *
 * *
 *
 *
 *
 * * * *
 *
 * * * * * *
 *
 *
 *
 * * * * * * * *
 */

int main()
{
    int one_or_three = 1;

    for (int i = 1; i <= 4; i++)
    {
        if (one_or_three)
        {
            printf("*\n");
            one_or_three = 0;
        }
        else
        {
            printf("*\n*\n*\n");
            one_or_three = 1;
        }

        for (int j = 1; j <= (i * 2); j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}