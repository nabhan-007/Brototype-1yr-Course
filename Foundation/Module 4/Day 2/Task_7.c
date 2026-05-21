// ============================================
// Module 4 | Day 2 | Task 7 - C
// ============================================
// Pattern: Pyramid (Numbers and Stars)
//
//     1
//    1*2
//   1*2*3
//  1*2*3*4
// 1*2*3*4*5
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

        int time_for_a_star = 1;
        for (int j = 1; j <= i; j++)
        {
            printf("%d", j);
            if (i != j)
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}
