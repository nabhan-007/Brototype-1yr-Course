// ============================================
// Module 4 | Day 1 | Task 7 — C
// ============================================
// Pattern: Number Pyramid (Centered)
//
// Expected Output (n = 5):
//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
//
// Rules:
//   - Each row i: print spaces, then 1..i, then (i-1)..1
//   - Center-aligned using leading spaces
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

        for (int j = 1; j <= i; j++)
        {
            printf("%d ", j);
        }

        for (int j = (i - 1); j >= 0; j--)
        {
            if (j != 0)
            {
                printf("%d ", j);
            }
        }
        printf("\n");
    }
    return 0;
}
