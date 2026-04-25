#include <stdio.h>

/*
  1 2 3 4 5 6 7 8 9
    1 2 3 4 5 6 7
      1 2 3 4 5
        1 2 3
          1
*/

int main()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("  ");
        }

        for (int k = 1; k <= (10 - ((i * 2) - 1)); k++)
        {
            printf("%d ", k);
        }

        printf("\n");
    }
}