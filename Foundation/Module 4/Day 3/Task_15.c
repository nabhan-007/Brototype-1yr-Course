// ============================================
// Module 4 | Day 3 | Task 15 - C
// ============================================
// Assignment 1.15: Write a C program to sort an array, then count the number of unique elements. Array: {4, 5, 4, 6, 6, 7, 8}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {4, 5, 4, 6, 6, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    int count = 0;
    for (int i = 0; i < size; i++)
    {
        if (i == size - 1 || arr[i] != arr[i + 1])
        {
            count++;
        }
    }
    printf("Count of Unique Elements: %d", count);

    return 0;
}
