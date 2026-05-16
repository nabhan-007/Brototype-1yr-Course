#include <stdio.h>

/*
 * *
 *
 * * * *
 *
 *
 *
 * * * * * * * *
 *
 *
 *
 *
 *
 */

int main()
{
    int num = 1;

    for (int i = 1; i <= 3; i++)
    {
        num = num * 2;
        for (int j = 1; j <= num; j++)
        {
            printf("* ");
        }
        printf("\n");

        for (int j = 1; j <= (i * 2 - 1); j++)
        {
            printf("*\n");
        }
    }
}
