#include <stdio.h>

/*
1 1 1 1 1 1 1 1 1
2 2 2 2 2 2 2 2
3 3 3 3 3 3 3
0 0
0 0
4 4 4 4 4 4
5 5 5 5 5
6 6 6 6
0 0
0 0
7 7 7
8 8
9
*/

int main()
{
    int num_rows = 9;
    for (int i = 1; i <= 9; i++)
    {
        for (int j = 1; j <= num_rows; j++)
        {
            printf("%d ", i);
        }

        if (i % 3 == 0 && i != 9)
        {
            printf("\n0 0 \n0 0");
        }

        num_rows -= 1;
        printf("\n");
    }
}