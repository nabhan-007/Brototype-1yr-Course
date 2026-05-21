// ============================================
// Module 4 | Day 2 | Task 1 - C
// ============================================
// Pattern: Number Diamond
//
//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1
//
// ============================================
#include <stdio.h>

int main()
{
    int n = 4;

    for (int i = -n; i <= n; i++)
    {
        int spaces = (i < 0) ? -i : i;
        for (int j = 0; j < spaces; j++)
        {
            printf(" ");
        }

        int limit = ((2 * (n - spaces)) + 1);
        int half = (limit + 1) / 2;
        for (int j = 1; j <= half; j++)
        {
            printf("%d", j);
        }
        // Remaining half
        for (int j = half - 1; j > 0; j--)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
