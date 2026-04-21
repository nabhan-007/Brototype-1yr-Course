#include <stdio.h>

int main()
{
    int n, i = 1, count = 1;
    printf("Enter a number: ");
    scanf("%d", &n);

    do
    {
        if (i % 2 != 0)
        {
            printf("(%d) %d\n", count, i);
            count += 1;
        }
        i += 1;
    } while (count <= n);

    return 0;
}