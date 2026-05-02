/*
Write a C program to merge two unsorted arrays and remove all duplicates: arr1 = {10, 20, 30}, arr2 = {20, 40, 30}.
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr1[] = {10, 20, 30};
    int length1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {20, 40, 30};
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

    // merging two unsorted arrays
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
    // removing all duplicates
    int write_index = 0;
    for (int read_index = 0; read_index < combinedLength; read_index++)
    {
        int isDuplicate = 0;
        for (int i = 0; i < write_index; i++)
        {
            if (combinedArray[read_index] == combinedArray[i])
            {
                isDuplicate = 1;
                break;
            }
        }
        if (isDuplicate)
        {
            continue;
        }
        combinedArray[write_index] = combinedArray[read_index];
        write_index++;
    }
    combinedLength = write_index;

    // Printing the New arrays
    printf("\nCombined Array: ");
    for (int i = 0; i < combinedLength; i++)
    {
        printf("%d ", combinedArray[i]);
    }

    free(combinedArray);
    return 0;
}