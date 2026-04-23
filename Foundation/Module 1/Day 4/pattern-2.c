#include <stdio.h>
/*
Just commented the spacing we gave to a diamond pattern
*/
int main()
{
    int number_of_rows = 4;
    // First half of a diamond is a pyramid
    for (int i = 1; i <= number_of_rows; i++)
    {
        // for (int j = 1; j <= (number_of_rows - i); j++)
        // {
        //     printf("  ");
        // }
        for (int k = 1; k <= ((i * 2) - 1); k++)
        {
            printf("* ");
        }
        printf("\n");
    }

    // Slightly smaller upside-down pyramid
    for (int i = 1; i <= 4; i++)
    {
        // for (int j = 1; j <= i; j++)
        // {
        //     printf("  ");
        // }
        for (int k = 1; k <= (((number_of_rows - i) * 2) - 1); k++)
        {
            printf("* ");
        }
        printf("\n");
    }
}