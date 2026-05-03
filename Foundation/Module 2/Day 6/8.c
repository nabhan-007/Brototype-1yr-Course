/*
Write a C program to delete two elements after every odd number. Array: {5, 10, 15, 8, 7, 20, 9, 12, 18}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 8, 7, 20, 9, 12, 18};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // delete two elements after every odd number
    int write_index = 0;
    for (int i = 0; i < length; i++)
    {
        myArray[write_index] = myArray[i];
        write_index++;

        if (myArray[i] % 2 != 0)
        {
            for (int j = 0; j < 2; j++)
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

    return 0;
}