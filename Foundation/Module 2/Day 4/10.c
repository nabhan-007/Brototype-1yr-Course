/*
Write a C program to check if all elements in an array are unique: {10, 20, 30, 40, 50}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 20, 30, 40, 50};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Main Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // checking if all elements in an array are unique
    int isUniqueArray = 1;
    for (int i = 0; i < length; i++)
    {
        // Optimization: If in any `j` loop run the `isUniqueArray` becomes `0` then no need to go through the remaining `i` loop
        if (isUniqueArray == 0)
        {
            break;
        }

        for (int j = 0; j < length; j++)
        {
            if (i != j && myArray[i] == myArray[j])
            {
                isUniqueArray = 0;
                break;
            }
        }
    }
    if (isUniqueArray)
    {
        printf("\nYes, this is a Unique Array :)");
    }
    else
    {
        printf("\nNo, this is NOT a Unique Array :(");
    }

    return 0;
}