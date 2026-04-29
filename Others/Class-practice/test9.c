#include <stdio.h>

int main()
{
    int limit = 3;
    // printf("Enter the number of elements: ");
    // scanf("%d", &limit);

    int myArray[3];

    printf("Enter %d Array values:\n", limit);
    for (int i = 0; i < limit; i++)
    {
        printf("> ");
        scanf("%d", &myArray[i]);
    }

    for (int i = 0; i < limit; i++)
    {
        printf("%d ", myArray[i]);
    }
}