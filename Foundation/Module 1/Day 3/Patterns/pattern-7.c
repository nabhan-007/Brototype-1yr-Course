#include <stdio.h>

int main()
{
    for (int i = 1; i <= 11; i++)
    {
        for (int j = 1; j <= 5; j++)
        {
            if (j == 1 || i == 1 || i == 6 || i == 11)
            {
                printf("* ");
            }
        }
        printf("\n");
    }
}