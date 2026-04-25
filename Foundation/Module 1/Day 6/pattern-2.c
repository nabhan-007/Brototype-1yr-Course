#include <stdio.h>

/*
 * * * * * * * * * * * * *
 * *
 * * * * * * * * * * *
 * * *
 * * * * * * * * *
 * * * *
 * * * * * * *
 * * * * *
 * * * * *
 * * * * * *
 * * *
 * * * * * * *
 *
 */

int main()
{
    for (int i = 7; i >= 1; i--)
    {
        for (int j = 1; j <= ((i * 2) - 1); j++)
        {
            printf("* ");
        }
        printf("\n");

        for (int j = 1; j <= (9 - i); j++)
        {
            if ((9 - i) != 8)
            {
                printf("* ");
            }
        }
        printf("\n");
    }
}
