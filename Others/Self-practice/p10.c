#include <stdio.h>

int main()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            if (i == 1 || i == 3 || i == 5)
            {
                printf("2 ");
            }
            else if ((i == 2 && j == 5) || (i == 4 && j == 1))
            {
                printf("2 ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}