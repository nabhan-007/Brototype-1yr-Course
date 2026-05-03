/*
Write a C program to delete next three elements that come immediately after a multiple of 4. Array: {6, 10, 8, 15, 12, 7, 18, 20}.
*/
#include <stdio.h>

int main()
{
    // int myArray[] = {6, 10, 8, 15, 12, 7, 18, 20};
    int myArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // if multiple of 4; delete next three elements
    int write_index = 0;
    for (int i = 0; i < length; i++)
    {
        myArray[write_index] = myArray[i];
        write_index++;

        if (myArray[i] % 4 == 0)
        {
            for (int j = 0; j < 3; j++)
            {
                if (i + 1 < length)
                {
                    i++;
                }
            }
        }
    }
    length = write_index;

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nExpected: 1 2 3 4 8");

    return 0;
}