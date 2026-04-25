#include <stdio.h>

/*
    1               1
      2           2
        3       3
          4   4
            5
          4   4
        3       3
      2           2
    1               1
*/

int main()
{
    int num = 1;
    for (int i = 1; i <= 5; i++)
    {

        for (int j = 0; j <= i; j++)
        {
            printf("  ");
        }

        printf("%d ", num);

        for (int j = 1; j <= (((5 - i) * 2) - 1); j++)
        {
            printf("  ");
        }

        if (num != 5)
        {
            printf("%d ", num);
        }

        num += 1;
        printf("\n");
    }

    // Upside-Down
    num = 5;
    for (int i = 5; i >= 1; i--)
    {

        if (num != 5)
        {
            for (int j = i; j >= 0; j--)
            {
                printf("  ");
            }
            printf("%d ", num);
        }

        for (int j = (((5 - i) * 2) - 1); j >= 1; j--)
        {
            printf("  ");
        }

        if (num != 5)
        {
            printf("%d ", num);
            printf("\n");
        }
        num -= 1;
    }
}
