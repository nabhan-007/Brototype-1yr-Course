#include <stdio.h>

/*
           *
         *   *
       *       *
     *           *
   *               *
 * * * * * * * * * * *
 */

int main()
{
    int rows = 6;

    for (int i = 1; i <= rows; i++)
    {
        for (int j = 1; j <= (rows - i); j++)
        {
            printf("  ");
        }

        for (int k = 1; k <= (2 * i - 1); k++)
        {
            if (k == 1 || i == rows || k == (2 * i - 1))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}