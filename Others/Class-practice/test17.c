#include <stdio.h>

int main()
{
    int myArray[] = {10, 20, 30, 30, 40, 50, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting all `30`
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] == 30)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            // Printing the New arrays
            printf("\nNew Array: ");
            for (int i = 0; i < length; i++)
            {
                printf("%d ", myArray[i]);
            }
            length--; // Reducing length
            i--;      // Going back to check the newly shifted value
        }
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}