#include <stdio.h>

/*
1 2 3 4
1
1
1 2 3 4
1
1
1 2 3 4
*/

int main()
{
    int rows = 7;
    for (int i = 1; i <= rows; i++)
    {
        for (int j = 1; j <= 4; j++)
        {
            if (j == 1 || i == 1 || i == rows || i == ((rows + 1) / 2))
            // ((rows + 1) / 2) => Finds the centre number of an odd number
            {
                printf("%d ", j);
            }
        }
        printf("\n");
    }
}