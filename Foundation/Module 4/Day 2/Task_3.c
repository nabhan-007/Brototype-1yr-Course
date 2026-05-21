// ============================================
// Module 4 | Day 2 | Task 3 - C
// ============================================
// Pattern: Alphabet Pyramid
//
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
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
            printf(" ");
        }
        char alphabet = 'A';
        for (int j = 1; j <= (2 * i - 1); j++)
        {
            printf("%c", alphabet++);
        }
        printf("\n");
    }
    return 0;
}
