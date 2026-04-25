#include <stdio.h>

/*
      1            
    1 2 1 
  1 2 3 2 1 
1 2 3 4 3 2 1 
*/

int main()
{
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= (4 - i); j++)
        {
            printf("  ");
        }

        for (int k = 1; k <= i; k++)
        {
            printf("%d ", k);
        }

        for (int k = i - 1; k > 0; k--)
        {
            if (i > 1)
            {
                printf("%d ", k);
            }
        }
        printf("\n");
    }
}