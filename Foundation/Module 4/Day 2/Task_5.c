// ============================================
// Module 4 | Day 2 | Task 5 - C
// ============================================
// Pattern: Hollow Alphabet X
//
// A   E
//  B D
//   C
//  B D
// A   E
//
// ============================================
#include <stdio.h>

int main()
{
    int n = 5;
    char from_a = 'A';
    char from_e = 'E';

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == j)
            {
                printf("%c", from_a++);
                if (i == n / 2)
                {
                    // middle only one letter; so, skip
                    from_e--;
                }
            }
            else if ((i + j) == (n - 1))
            {
                printf("%c", from_e--);
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
