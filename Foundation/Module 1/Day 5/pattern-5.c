#include <stdio.h>

/*
        A
      B   C
    D       E
  F           G
H               I
  J           K
    L       M
      N   O
        P
 */

int main()
{
    int number_of_rows = 5;
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
            if (k == 1 || k == (2 * i - 1))
            {
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

    // Slightly smaller upside-down pyramid
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("  ");
        }
        for (int k = 1; k <= (((number_of_rows - i) * 2) - 1); k++)
        {
            if (k == 1 || k == (((number_of_rows - i) * 2) - 1))
            {
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
