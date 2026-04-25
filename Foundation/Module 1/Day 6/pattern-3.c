#include <stdio.h>

/*
0
3 2 1
0
0
4 3 2 1
0
0
0
5 4 3 2 1
*/

int main()
{
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("0 \n");
        }

        for (int j = (i + 2); j >= 1; j--)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}