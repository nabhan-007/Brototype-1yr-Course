/*
Write a C program to delete the next THREE elements that come immediately after every multiple of 3 in an array.
Array: {9, 4, 7, 2, 6, 8, 11, 5, 3, 10, 14}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {9, 4, 7, 2, 6, 8, 11, 5, 3, 10, 14};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    int write_index = 0;
    for (int i = 0; i < length; i++)
    {
        myArray[write_index] = myArray[i];
        write_index++;

        if (myArray[i] % 3 == 0)
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

    // Printing the New Array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}
