/*
Write a C program to find and print all unique elements in an array (elements that appear only once): {10, 15, 10, 20, 15, 30}.
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

    // Finding and printing all unique elements in an array
    printf("\nUnique elements in the array: ");
    for (int i = 0; i < length; i++)
    {
        int isUnique = 1;
        for (int j = 0; j < length; j++)
        {
            if (myArray[i] == myArray[j] && i != j)
            {
                isUnique = 0;
                break;
            }
        }
        if (isUnique)
        {
            printf("%d ", myArray[i]);
        }
    }

    return 0;
}