// ============================================
// Module 4 | Day 1 | Task 3 - C
// ============================================
// Pattern: Solid Diamond
//
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
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
        for (int j = 0; j < (i * 2 - 1); j++)
        {
            printf("* ");
        }
        printf("\n");
    }

    for (int i = 1; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            printf("  ");
        }
        for (int j = ((n - i) * 2 - 1); j > 0; j--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
