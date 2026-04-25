#include <stdio.h>

int main()
{
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("* ");
        }
        for (int j = 1; j <= (((4 - i) * 2) - 1); j++)
        {
            printf("  ");
        }
        for (int j = 1; j <= i; j++)
        {
            if (i != 4 || j != 4)
            {
                printf("* ");
            }
        }
        printf("\n");
    }

    for (int i = 3; i >= 1; i--)
    {
        for (int j = i; j >= 1; j--)
        {
            printf("* ");
        }
        for (int j = 1; j <= (((4 - i) * 2) - 1); j++)
        {
            printf("  ");
        }
        for (int j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}