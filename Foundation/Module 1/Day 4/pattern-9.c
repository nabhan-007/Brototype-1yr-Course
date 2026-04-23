#include <stdio.h>

/*
  A B C D E F G H I
    J           K
      L       M
        N   O
          P
*/

int main()
{
    char alphabet = 'A';

    for (int i = 1; i <= 6; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("  ");
        }

        for (int k = 1; k <= (11 - (i * 2)); k++)
        {
            if (i == 1 || k == 1 || k == (11 - (i * 2)))
            {
                // printf("* ");
                printf("%c ", alphabet);
                alphabet += 1;
            }
            else
            {
                printf("  ");
            }
        }

        printf("\n");
    }
}