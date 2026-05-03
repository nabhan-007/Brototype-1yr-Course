/*
Write a C program to separate even and odd numbers into two different arrays, then print the array that has more elements. Array: {12, 7, 18, 9, 24, 11, 30, 5}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int myArray[] = {12, 7, 18, 9, 24, 11, 30, 5};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // separate even and odd numbers into two different arrays
    int *evenArray = malloc(length * sizeof(int));
    int *oddArray = malloc(length * sizeof(int));
    int evenLength = 0, oddLength = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            evenArray[evenLength] = myArray[i];
            evenLength++;
        }
        else
        {
            oddArray[oddLength] = myArray[i];
            oddLength++;
        }
    }

    // Printing the array that has more elements
    if (evenLength > oddLength)
    {
        printf("\nEven Array: ");
        for (int i = 0; i < evenLength; i++)
        {
            printf("%d ", evenArray[i]);
        }
    }
    else if (oddLength > evenLength)
    {
        printf("\nOdd Array: ");
        for (int i = 0; i < oddLength; i++)
        {
            printf("%d ", oddArray[i]);
        }
    }
    else
    {
        printf("\nEven Array: ");
        for (int i = 0; i < evenLength; i++)
        {
            printf("%d ", evenArray[i]);
        }
        printf("\nOdd Array: ");
        for (int i = 0; i < oddLength; i++)
        {
            printf("%d ", oddArray[i]);
        }
    }

    free(evenArray);
    free(oddArray);
    return 0;
}