#include <stdio.h>

int main()
{
    int n = 5;
    // printf("Enter the number of rows to show number pattern: ");
    // scanf("%d", &n);

    for (int row = 1; row <= n; row++)
    {
        for (int space = 1; space <= (n - row); space++)
        {
            printf(" ");
        }
        for (int num = 1; num <= ((2 * row) - 1); num++)
        {
            printf("%d", num);
        }
        printf("\n");
    }
    for (int row = (n - 1); row >= 1; row--)
    {
        for (int space = 1; space <= (n - row); space++)
        {
            printf(" ");
        }
        for (int num = 1; num <= ((2 * row) - 1); num++)
        {
            printf("%d", num);
        }
        printf("\n");
    }
}
