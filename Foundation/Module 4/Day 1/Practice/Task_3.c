// ============================================
// Module 4 | Day 1 | Task 3 — C
// ============================================
// Pattern: Inverted Right-angled Triangle (Stars)
//
// Expected Output (n = 5):
//   * * * * *
//   * * * *
//   * * *
//   * *
//   *
//
// Rules:
//   - Row i prints (n - i + 1) stars
//   - Stars separated by a space
// ============================================

#include <stdio.h>

int main()
{
    int n = 5;

    for (int i = 5; i > 0; i--)
    {
        for (int j = i; j > 0; j--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
