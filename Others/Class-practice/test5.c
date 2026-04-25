#include <stdio.h>

/*
1 3 5 7 9
3 5 7 9
5 7 9
7 9
9
*/

int main()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = i; j <= 5; j++)
        {
            printf("%d ", ((j * 2) - 1));
        }
        printf("\n");
    }
}