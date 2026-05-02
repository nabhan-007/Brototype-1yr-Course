/*
Write a C program to delete repeating elements from an array: {10, 15, 10, 20, 15, 30, 10}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30, 10};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // deleting repeating elements from an array
    int write_index = 0;
    for (int read_index = 0; read_index < length; read_index++)
    {
        int isDuplicate = 0;
        for (int i = 0; i < write_index; i++)
        {
            if (myArray[read_index] == myArray[i])
            {
                isDuplicate = 1;
                break;
            }
        }
        if (isDuplicate)
        {
            continue;
        }
        myArray[write_index] = myArray[read_index];
        write_index++;
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