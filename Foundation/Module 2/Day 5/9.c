/*
Write a C program to merge two arrays into a single array: arr1 = {10, 20, 30}, arr2 = {40, 50, 60}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr1[] = {10, 20, 30};
    int length1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {40, 50, 60};
    int length2 = sizeof(arr2) / sizeof(arr2[0]);

    // Printing the OG arrays
    printf("Array 1: ");
    for (int i = 0; i < length1; i++)
    {
        printf("%d ", arr1[i]);
    }
    printf("\nArray 2: ");
    for (int i = 0; i < length2; i++)
    {
        printf("%d ", arr2[i]);
    }

    // merging two arrays into a single array
    int combinedLength = length1 + length2;
    int *combinedArray = malloc(combinedLength * sizeof(int));

    for (int i = 0; i < length1; i++)
    {
        combinedArray[i] = arr1[i];
    }

    for (int i = 0; i < length2; i++)
    {
        combinedArray[length1 + i] = arr2[i];
    }

    // Printing the New arrays
    printf("\nCombined Array: ");
    for (int i = 0; i < combinedLength; i++)
    {
        printf("%d ", combinedArray[i]);
    }

    free(combinedArray);
    return 0;
}