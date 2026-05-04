/*
 *                   *
 * * *           * * *
 * * * * *   * * * * *
 * * * * * * * * * * *
 */
#include <stdio.h>

int main()
{
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 0; j < ((i * 2) - 1); j++)
        {
            if (i == 4)
            {
                j++;
            }
            printf("* ");
        }

        for (int j = 0; j < 11 - (((i * 2) - 1) * 2); j++)
        {
            printf("  ");
        }

        for (int j = 0; j < ((i * 2) - 1); j++)
        {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}