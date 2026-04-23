#include <stdio.h>

int main()
{
    for (int i = 1; i <= 6; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("  ");
        }

        for (int k = 1; k <= (13 - (i * 2)); k++)
        {
            if (i == 1 || k == 1 || k == (13 - (i * 2)))
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
}