/*
Write a C program to Skip One elements after every even number  in an array: {5, 10, 15, 8, 20, 7, 25, 12, 30}.
*/

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

    // Skip One elements after every even number
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            printf("%d ", myArray[i]);
            i += 1;
        }
        else
        {
            printf("%d ", myArray[i]);
        }
    }

    return 0;
}