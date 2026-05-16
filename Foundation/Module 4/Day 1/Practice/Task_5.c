// ============================================
// Module 4 | Day 1 | Task 5 — C
// ============================================
// Pattern: Hollow Square (Stars)
//
// Expected Output (n = 5):
//   * * * * *
//   *       *
//   *       *
//   *       *
//   * * * * *
//
// Rules:
//   - Print * on borders (first row, last row, first col, last col)
//   - Print spaces inside
// ============================================

#include <stdio.h>

int main()
{
    int n = 5;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == 0 || i == (n - 1) || j == (n - 1) || j == 0)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
