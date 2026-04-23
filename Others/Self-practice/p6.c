#include <stdio.h>

int main()
{
    for (int i = 1; i <= 5; i++)
    {
        for (int j = i; j <= 5; j++)
        {
            int num = ((j * 2) - 1);
            printf("%d ", num);
        }
        printf("\n");
    }

    return 0;
}
