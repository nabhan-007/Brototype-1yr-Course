// ============================================
// Module 4 | Day 2 | Task 11 - C
// ============================================
// Pattern: Fibonacci-like Repeating Stars
//
// *
// **
// *
// *
// ***
// ***
// *
// *
// ****
// ****
// ****
//
// ============================================
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR
// NOT CLEAR

#include <stdio.h>

int main()
{
    int n = 4; // Set to 4 to match the 4-star peak in the pattern
    int a = 1, b = 0, fib;

    for (int i = 1; i <= n; i++)
    {
        // Generate the Fibonacci sequence for block repetitions: 1, 1, 2, 3
        fib = a + b;
        a = b;
        b = fib;

        // Print a block of 'i' stars, 'fib' times
        for (int j = 0; j < fib; j++)
        {
            for (int k = 0; k < i; k++)
            {
                printf("*");
            }
            printf("\n");
        }

        // Print the hardcoded double-star separator between blocks (starting after length 2)
        if (i >= 2 && i < n)
        {
            printf("*\n*\n");
        }
    }
    return 0;
}