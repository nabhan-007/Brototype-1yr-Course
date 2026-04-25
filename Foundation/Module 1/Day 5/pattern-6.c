#include <stdio.h>

/*
        1
      0 1 0
    1 0 1 0 1
  0 1 0 1 0 1 0
1 0 1 0 1 0 1 0 1
  0 1 0 1 0 1 0
    1 0 1 0 1
      0 1 0
        1
*/

int main()
{
    int number_of_rows = 5;
    int zero_or_one = 1;

    // First half of a diamond is a pyramid
    for (int i = 1; i <= number_of_rows; i++)
    {
        for (int j = 1; j <= (number_of_rows - i); j++)
        {
            printf("  ");
        }
        for (int k = 1; k <= ((i * 2) - 1); k++)
        {
            if (zero_or_one % 2 != 0)
            {
                printf("1 ");
            }
            else
            {
                printf("0 ");
            }
            zero_or_one += 1;
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
            if (zero_or_one % 2 != 0)
            {
                printf("1 ");
            }
            else
            {
                printf("0 ");
            }
            zero_or_one += 1;
        }
        printf("\n");
    }
}
