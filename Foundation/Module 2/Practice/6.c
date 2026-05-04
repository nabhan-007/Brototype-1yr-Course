/*
Write a C program to merge two arrays and remove all duplicate elements from the merged result.
arr1 = {5, 10, 15, 20}, arr2 = {10, 20, 25, 30}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr1[] = {5, 10, 15, 20}, arr2[] = {10, 20, 25, 30};
    int length1 = sizeof(arr1) / sizeof(arr1[0]);
    int length2 = sizeof(arr2) / sizeof(arr2[0]);

    // Merging the two arrays
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

    // Printing the merged Array
    printf("\nCombined Array: ");
    for (int i = 0; i < combinedLength; i++)
    {
        printf("%d ", combinedArray[i]);
    }

    // removing all duplicate elements
    for (int i = 0; i < combinedLength; i++)
    {
        for (int j = 0; j < combinedLength; j++)
        {
            if (i != j && combinedArray[i] == combinedArray[j])
            {
                for (int k = j; k < combinedLength - 1; k++)
                {
                    combinedArray[k] = combinedArray[k + 1];
                }
                combinedLength--;
                j--;
            }
        }
    }

    // Printing the Unique Array
    printf("\nUnique Array: ");
    for (int i = 0; i < combinedLength; i++)
    {
        printf("%d ", combinedArray[i]);
    }

    free(combinedArray);
    return 0;
}
