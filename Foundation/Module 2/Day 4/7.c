/*
Write a C program to identify and print all duplicate elements in an array: {10, 15, 10, 20, 15, 30, 10}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30, 10};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // identifying and printing all duplicate elements
    printf("\nDuplicate elements in the array: ");
    for (int i = 0; i < length; i++)
    {
        int isDuplicate = 0;
        for (int j = 0; j < length; j++)
        {
            if (myArray[i] == myArray[j] && i != j)
            {
                isDuplicate = 1;
                break;
            }
        }
        // Checking for if printed earlier; if not, print
        int printNum = 1; // True
        for (int j = 0; j < i; j++)
        {
            if (myArray[i] == myArray[j])
            {
                printNum = 0; // False
                break;
            }
        }
        if (isDuplicate && printNum)
        {
            printf("%d ", myArray[i]);
        }
    }

    return 0;
}