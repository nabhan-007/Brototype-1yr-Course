#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 8, 20, 7, 25, 12, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Skipping two numbers after a multiple of `5`
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 5 == 0)
        {
            printf("%d ", myArray[i]);
            i += 2;
        }
        else
        {
            printf("%d ", myArray[i]);
        }
    }

    return 0;
}