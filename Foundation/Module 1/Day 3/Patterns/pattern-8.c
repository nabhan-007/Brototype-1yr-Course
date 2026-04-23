#include <stdio.h>

int main()

{
    for (int i = 1; i <= 12; i++)
    {
        for (int j = 1; j <= 3; j++)
        {
            if (j == 1 || i == 1 || i == 5 || i == 6 || i == 10 || i == 11 || i == 12)
            {
                printf("* ");
            }
        }
        printf("\n");
    }
}