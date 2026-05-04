/*
Write a C program to search for a target number in an array. If found, delete it and shift all remaining elements left. If not found, print "Not Found".
Array: {15, 23, 8, 42, 17, 33}, Search for: 42.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {15, 23, 8, 42, 17, 33};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    int target_number = 42;

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Searching for the target number and deleting it
    int isFound = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] == target_number)
        {
            isFound = 1;
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }
    if (!isFound)
    {
        printf("\nNot Found");
    }
    else
    {
        // Printing the New Array
        printf("\nNew Array: ");
        for (int i = 0; i < length; i++)
        {
            printf("%d ", myArray[i]);
        }
    }

    return 0;
}
