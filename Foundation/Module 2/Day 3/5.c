#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 8, 20, 7, 30, 12};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting all multiples of `5`
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 5 == 0)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            i -= 1;
            length -= 1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}