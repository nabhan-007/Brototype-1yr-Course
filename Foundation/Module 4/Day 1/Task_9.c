// ============================================
// Module 4 | Day 1 | Task 9 - C
// ============================================
// Pattern: Hollow Hourglass
//
// *********
//  *     *
//   *   *
//    * *
//     *
//    * *
//   *   *
//  *     *
// *********
//
// ============================================
#include <stdio.h>

int main()
{
    int n = 4;

    for (int i = -n; i <= n; i++)
    {
        int absValue = ((i < 0) ? -i : i);

        int spaces = n - absValue;
        int stars = (2 * absValue + 1);

        for (int j = 0; j < spaces; j++)
        {
            printf(" ");
        }

        for (int j = 1; j <= stars; j++)
        {
            if (j == 1 || j == stars || n == absValue)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }

        printf("\n");
    }
    return 0;
}
