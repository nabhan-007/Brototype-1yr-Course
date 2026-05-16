#include <stdio.h>

// 1       1
//  2     2
//   3   3
//    4 4
//     5
//    4 4
//   3   3
//  2     2
// 1       1

int main()
{
    for (int i = 1; i <= 9; i++)
    {
        for (int j = 1; j <= 9; j++)
        {
            if (i == j || (i + j) == 10)
            {
                if (i <= 5)
                {
                    printf("%d ", i);
                }
                else
                {
                    printf("%d ", 10 - i);
                }
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
