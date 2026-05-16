// ============================================
// Module 4 | Day 1 | Task 1 — C
// ============================================
// Pattern: Right-angled Triangle (Stars)
//
// Expected Output (n = 5):
//   *
//   * *
//   * * *
//   * * * *
//   * * * * *
//
// Rules:
//   - Row i prints i stars
//   - Stars separated by a space
// ============================================

#include <stdio.h>

int main()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
