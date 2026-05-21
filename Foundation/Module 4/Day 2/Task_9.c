// ============================================
// Module 4 | Day 2 | Task 9 - C
// ============================================
// Pattern: Hollow X with Alternating Alphabets and Stars
//
// A       A
//  *     *
//   B   B
//    * *
//     C
//    * *
//   B   B
//  *     *
// A       A
//
// ============================================
#include <stdio.h>

int main()
{
    int n = 9;
    char alphabet = 'A';

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == j || (n - 1) == (i + j))
            {
                printf("%c", (i % 2 == 0) ? alphabet : '*');
            }
            else
            {
                printf(" ");
            }
        }

        if (i % 2 == 0)
        {
            if (i < n / 2)
            {
                alphabet++;
            }
            else
            {
                alphabet--;
            }
        }

        printf("\n");
    }
    return 0;
}
