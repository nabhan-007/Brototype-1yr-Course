/*
1 2 3 4  17 18 19 20
  5 6 7  14 15 16
    8 9  12 13
      10 11

*/
#include <stdio.h>

int main()
{
    int n = 4;
    int num = 1;
    int total = 20;

    for (int i = 0; i < n; i++)
    {

        for (int s = 0; s < i * 2; s++)
        {
            printf(" ");
        }

        for (int j = 0; j < n - i; j++)
        {
            printf("%d ", num++);
        }

        int start = total - ((n - i) - 1);
        for (int j = 0; j < n - i; j++)
        {
            printf("%d ", start++);
        }

        total -= (n - i);
        printf("\n");
    }

    return 0;
}
