#include <stdio.h>

int main()
{
    char alphabet = 'A';
    printf("%c \n", alphabet);

    for (int i = 2; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%d ", i - 1);
        }

        printf("\n");

        for (int j = 1; j <= i; j++)
        {
            alphabet += 1;
            printf("%c ", alphabet);
        }
        printf("\n");
    }
}