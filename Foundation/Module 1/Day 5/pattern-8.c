#include <stdio.h>

/*
        A
      1 1 1
    B B B B B
  2 2 2 2 2 2 2
C C C C C C C C C
  3 3 3 3 3 3 3
    D D D D D
      4 4 4
        E
*/

int main()
{
    int number_of_rows = 5;
    int num = 1;
    char alphabet = 'A';

    // First half of a diamond is a pyramid
    for (int i = 1; i <= number_of_rows; i++)
    {
        for (int j = 1; j <= (number_of_rows - i); j++)
        {
            printf("  ");
        }
        for (int k = 1; k <= ((i * 2) - 1); k++)
        {
            if (i % 2 != 0)
            {
                printf("%c ", alphabet);
            }
            else
            {
                printf("%d ", num);
            }
        }
        if (i % 2 != 0)
        {
            alphabet += 1;
        }
        else
        {
            num += 1;
        }
        printf("\n");
    }

    // Slightly smaller upside-down pyramid
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("  ");
        }
        for (int k = 1; k <= (((number_of_rows - i) * 2) - 1); k++)
        {
            if (i % 2 != 0)
            {
                printf("%d ", num);
            }
            else
            {
                printf("%c ", alphabet);
            }
        }
        if (i % 2 != 0)
        {
            num += 1;
        }
        else
        {
            alphabet += 1;
        }
        printf("\n");
    }
}
