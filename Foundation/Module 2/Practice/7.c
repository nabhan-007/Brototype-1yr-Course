/*
Write a C program to separate even and odd numbers into two different arrays, then print the array that has MORE elements.
Array: {12, 7, 18, 9, 24, 11, 30, 5}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int myArray[] = {12, 7, 18, 9, 24, 11, 30, 5};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    int *evenArray = malloc(length * sizeof(int));
    int *oddArray = malloc(length * sizeof(int));

    int evenIndex = 0, oddIndex = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            evenArray[evenIndex] = myArray[i];
            evenIndex++;
        }
        else
        {
            oddArray[oddIndex] = myArray[i];
            oddIndex++;
        }
    }

    if (evenIndex > oddIndex)
    {
        printf("\nEven Array: ");
        for (int i = 0; i < evenIndex; i++)
        {
            printf("%d ", evenArray[i]);
        }
    }
    else if (oddIndex > evenIndex)
    {
        printf("\nOdd Array: ");
        for (int i = 0; i < oddIndex; i++)
        {
            printf("%d ", oddArray[i]);
        }
    }
    else
    {
        printf("\nEven Array: ");
        for (int i = 0; i < evenIndex; i++)
        {
            printf("%d ", evenArray[i]);
        }
        printf("\nOdd Array: ");
        for (int i = 0; i < oddIndex; i++)
        {
            printf("%d ", oddArray[i]);
        }
    }

    free(evenArray);
    free(oddArray);
    return 0;
}
