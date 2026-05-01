/*
Write a C program to replace all duplicate numbers with -1 in an array: {10, 15, 10, 20, 15, 30}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Replacing all duplicate numbers with -1 (any num appearing more than once will be `-1`)
    for (int i = 0; i < length; i++)
    {
        int changeValue = 0;
        for (int j = 0; j < length; j++)
        {
            if (i != j && myArray[i] != (-1) && myArray[i] == myArray[j])
            {
                myArray[j] = (-1);
                changeValue = 1;
            }
        }
        if (changeValue)
        {
            myArray[i] = (-1);
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}