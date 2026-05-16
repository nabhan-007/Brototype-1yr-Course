// ============================================
// Module 4 | Day 1 | Task 7 - C
// ============================================
// Pattern: Hollow Diamond
//
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
//
// ============================================
#include <stdio.h>

int main()
{
    int n = 4;

    for (int i = -n; i <= n; i++)
    {
        int spaces = (i < 0) ? -i : i;
        int stars = ((2 * (n - spaces)) + 1);

        for (int j = 0; j < spaces; j++)
        {
            printf(" ");
        }

        for (int j = 1; j <= stars; j++)
        {
            if (j == 1 || j == stars)
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