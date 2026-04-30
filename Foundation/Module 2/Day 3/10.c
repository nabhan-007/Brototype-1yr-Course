/*
Write a C program to delete the lowest element from an array: {12, 7, 18, 5, 22, 9, 14}.
*/

#include <stdio.h>

int main()
{
    int myArray[] = {12, 7, 18, 5, 22, 9, 14};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Find the lowest number
    int lowestNum = myArray[0];
    for (int i = 1; i < length; i++)
    {
        if (lowestNum > myArray[i])
        {
            lowestNum = myArray[i];
        }
    }

    // delete the lowest element
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] == lowestNum)
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}