/*
Write a C program to display an array after skipping one element next to each multiple of 5. Array: {5, 10, 15, 8, 20, 7, 25, 12, 30}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 8, 20, 7, 25, 12, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // skipping one element next to each multiple of 5
    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
        if (myArray[i] % 5 == 0)
        {
            i++;
        }
    }

    return 0;
}