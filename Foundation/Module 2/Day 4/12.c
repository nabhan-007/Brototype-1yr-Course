/*
Write a C program to delete all unique elements from an array (keep only duplicates): {10, 15, 10, 20, 15, 30, 25}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30, 25};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG array
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting all unique elements from an array
    for (int i = 0; i < length; i++)
    {
        int isUnique = 1;
        for (int j = 0; j < length; j++)
        {
            if (i != j && myArray[i] == myArray[j])
            {
                isUnique = 0;
                break;
            }
        }
        if (isUnique)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }

    // Printing the new array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}