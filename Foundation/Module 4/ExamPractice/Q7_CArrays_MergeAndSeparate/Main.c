/*
 * ============================================================
 * EXAM PRACTICE - Question 7: C Arrays Merge and Separate
 * ============================================================
 *
 * TASK:
 *   1. Write a C program to merge two sorted arrays into a third sorted array.
 *   2. Then, write logic to separate the newly merged array into two arrays:
 *      - One containing all the even numbers.
 *      - One containing all the odd numbers.
 *
 *   Example Input:
 *     Array 1: {1, 3, 5, 7}
 *     Array 2: {2, 4, 6, 8}
 *
 *   Example Output:
 *     Merged Array: {1, 2, 3, 4, 5, 6, 7, 8}
 *     Evens Array: {2, 4, 6, 8}
 *     Odds Array: {1, 3, 5, 7}
 *
 * CONCEPTS TESTED:
 *   - Array merging logic (two-pointer technique for sorted arrays)
 *   - Array traversal and conditional separation
 *   - Managing multiple array sizes dynamically
 * ============================================================
 */

#include <stdio.h>

int main()
{
    int arr1[] = {1, 3, 5, 7};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {2, 4, 6, 8};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    int combLength = size1 + size2;
    int mergedArray[combLength];
    int l1 = 0, l2 = 0;
    for (int i = 0; i < combLength; i++)
    {
        if (i % 2 == 0)
        {
            mergedArray[i] = arr1[l1++];
        }
        else
        {
            mergedArray[i] = arr2[l2++];
        }
    }

    printf("Merged Array: ");
    for (int i = 0; i < combLength; i++)
    {
        printf("%d ", mergedArray[i]);
    }

    int evens[combLength], odds[combLength];
    int evenIndex = 0, oddIndex = 0;

    for (int i = 0; i < combLength; i++)
    {
        if (mergedArray[i] % 2 == 0)
        {
            evens[evenIndex++] = mergedArray[i];
        }
        else
        {
            odds[oddIndex++] = mergedArray[i];
        }
    }

    printf("\nEven Array: ");
    for (int i = 0; i < evenIndex; i++)
    {
        printf("%d ", evens[i]);
    }

    printf("\nOdd Array: ");
    for (int i = 0; i < oddIndex; i++)
    {
        printf("%d ", odds[i]);
    }

    return 0;
}

// ==========================================
// EXAMINER REMARKS:
// Score: 8/10
// Feedback: Your separation logic is perfect. However, your merging logic (interleaving with i%2) only works because both arrays are exactly the same size. A true merge compares elements: while(l1 < size1 && l2 < size2) { if (arr1[l1] < arr2[l2]) ... }
// ==========================================
