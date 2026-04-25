#include <stdio.h>

/*
1 2 3 4 5 6 7 8 9
1 2
3 4
1 2 3 4 5 6 7
1 2
3 4
5 6
1 2 3 4 5
1 2
3 4
5 6
7 8
1 2 3
*/

int main()
{
    for (int i = 5; i >= 2; i--)
    {
        for (int j = 1; j <= ((i * 2) - 1); j++)
        {
            printf("%d ", j);
        }
        printf("\n");

        for (int j = 1; j <= 13 - ((i * 2) - 1); j++)
        {
            if (i > 2)
            {
                printf("%d ", j);
                if (j % 2 == 0)
                {
                    printf("\n");
                }
            }
        }
    }
}
