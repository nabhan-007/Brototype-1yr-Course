/*
Merging 2 arrays and also using malloc and free
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int myArray1[] = {1, 2, 3, 4, 5};
    int myArray2[] = {6, 7, 8, 9, 10};
    int length1 = sizeof(myArray1) / sizeof(myArray1[0]);
    int length2 = sizeof(myArray2) / sizeof(myArray2[0]);

    // Printing the OG arrays
    printf("OG Array 1: ");
    for (int i = 0; i < length1; i++)
    {
        printf("%d ", myArray1[i]);
    }
    printf("\nOG Array 2: ");
    for (int i = 0; i < length2; i++)
    {
        printf("%d ", myArray2[i]);
    }

    // merging myArray 1&2
    int combinedLength = length1 + length2;
    int *mergedArray = malloc(combinedLength * sizeof(int)); // dynamic allocation: by❤️

    for (int i = 0; i < length1; i++)
    {
        mergedArray[i] = myArray1[i];
    }
    for (int i = 0; i < length2; i++)
    {
        mergedArray[length1 + i] = myArray2[i];
    }

    // Printing the New array
    printf("\nMerged Array: ");
    for (int i = 0; i < combinedLength; i++)
    {
        printf("%d ", mergedArray[i]);
    }

    free(mergedArray); // cleaning up: by🧠
    return 0;
}