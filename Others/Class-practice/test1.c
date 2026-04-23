#include <stdio.h>

int main()
{
    int limit = 9;
    for (int i = 1; i <= limit; i++)
    {
        for (int j = 1; j <= limit; j++)
        {
            if (i == 1 || i == limit || i == 5)
            {
                printf("* ");
            }
            else if (j == 1 || j == limit || j == 5)
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