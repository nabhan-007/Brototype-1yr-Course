#include <stdio.h>

/*
A
1 1
B B B
2 2 2 2
C C C C C
3 3 3 3 3 3
D D D D D D D
*/

int main()
{
    int rows = 7;
    int num = 1;
    char alphabet = 'A';

    for (int i = 1; i <= rows; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            if (i % 2 != 0)
            {
                {
                    printf("%c ", alphabet);
                }
            }
            else
            {
                printf("%d ", num);
            }
        }

        if (i % 2 != 0)
        {
            alphabet += 1;
        }
        else
        {
            num += 1;
        }
        printf("\n");
    }
    return 0;
}