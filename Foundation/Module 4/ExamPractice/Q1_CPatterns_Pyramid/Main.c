/*
 * ============================================================
 * EXAM PRACTICE - Question 1: C Patterns (Pyramid)
 * ============================================================
 *
 * TASK:
 *   Write a C program to print a full pyramid pattern using numbers.
 *   The user will input the number of rows 'N'.
 *   For N = 4, the output should look like:
 *      1
 *     232
 *    34543
 *   4567654
 *
 * CONCEPTS TESTED:
 *   - Nested loops in C
 *   - Space calculation (N - i)
 *   - Palindromic logic within a row
 * ============================================================
 */

#include <stdio.h>

int main()
{
    int N = 4; // You can change this to test

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= (N - i); j++)
        {
            printf("  ");
        }

        int num = i;
        int limit = (i * 2 - 1);
        for (int j = 1; j <= limit; j++)
        {
            printf("%d ", num);
            if (j < i)
            {
                num++;
            }
            else
            {
                num--;
            }
        }
        printf("\n");
    }

    return 0;
}


// ==========================================
// EXAMINER REMARKS:
// Score: 10/10
// Feedback: Perfect palindromic logic for the pyramid! You managed the inner loop limits flawlessly.
// ==========================================
