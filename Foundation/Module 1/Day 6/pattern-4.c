#include <stdio.h>

/*
1 2 3 4 4 3 2 1
1 2 3 * * 3 2 1
1 2 * * * * 2 1
1 * * * * * * 1
*/

int main()
{
    for (int i = 1; i < 5; i++)
    {
        for (int j = 1; j <= (5 - i); j++)
        {
            printf("%d ", j);
        }

        for (int j = 1; j <= (i - 1); j++)
        {
            if (i > 1)
            {
                printf("* ");
            }
        }

        for (int j = (i - 1); j >= 1; j--)
        {
            if (i > 1)
            {
                printf("* ");
            }
        }

        for (int j = (5 - i); j >= 1; j--)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}