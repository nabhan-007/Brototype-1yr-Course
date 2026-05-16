// ============================================
// Module 4 | Day 1 | Task 1 - C
// ============================================
// Pattern: Solid Pyramid
//
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//
// ============================================
#include <stdio.h>
int main()
{
    int n = 5;

    for (int i = 1; i <= n; i++)
    {
        for (int j = (n - i); j > 0; j--)
        {
            printf("  ");
        }

        for (int j = 1; j <= (i * 2 - 1); j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
