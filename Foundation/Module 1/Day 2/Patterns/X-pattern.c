#include <stdio.h>

int main()
{
    for (int i = 1; i <= 7; i++)
    {
        for (int j = 1; j <= 7; j++)
        {
            if (i == 4 && j == 4)
            {
                printf("* ");
            }
            else if (i == j || j == (8 - i))
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