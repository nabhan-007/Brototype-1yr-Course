#include <stdio.h>

/*
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
*/

int main()
{
    int n, row, space, num;

    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (row = 1; row <= n; row++)
    {
        for (space = 1; space <= (n - row); space++)
        {
            printf("  ");
        }

        for (num = row; num < (row * 2); num++)
        {
            printf("%d ", num);
        }

        for (num = ((row * 2) - 2); num >= row; num--)
        {
            printf("%d ", num);
        }

        printf("\n");
    }
    return 0;
}