// ============================================
// Module 4 | Day 1 | Task 13 - C
// ============================================
// Pattern: Number Triangle with *
//
// 1
// 1*2
// 1*2*3
// 1*2*3*4
// 1*2*3*4*5
//
// ============================================
#include <stdio.h>
int main()
{
    int n = 5;
    int shouldPrint = 0;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d", j);
            if (j < n && j != i)
            {
                printf("*");
            }
        }
        shouldPrint = 0;
        printf("\n");
    }
    return 0;
}
