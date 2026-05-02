/*
Write a C program to separate even and odd elements into two different arrays: {12, 7, 18, 9, 24, 11, 30}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int myArray[] = {12, 7, 18, 9, 24, 11, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    int *evenArray = malloc(length * sizeof(int));
    int *oddArray = malloc(length * sizeof(int));

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Even to `evenArray` and Odd to `oddArray`
    int even_index = 0, odd_index = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            evenArray[even_index] = myArray[i];
            even_index++;
        }
        else
        {
            oddArray[odd_index] = myArray[i];
            odd_index++;
        }
    }

    // Printing the New arrays
    printf("\nEven Array: ");
    for (int i = 0; i < even_index; i++)
    {
        printf("%d ", evenArray[i]);
    }
    printf("\nOdd Array: ");
    for (int i = 0; i < odd_index; i++)
    {
        printf("%d ", oddArray[i]);
    }

    free(evenArray);
    free(oddArray);
    return 0;
}