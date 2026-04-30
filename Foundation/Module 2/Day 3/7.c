#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 8, 20, 7, 25, 12};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting one number after every multiples of `5`
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 5 == 0 && i != length - 1)
        {
            for (int j = i + 1; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
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