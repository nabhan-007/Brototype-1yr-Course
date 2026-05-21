// ============================================
// Module 4 | Day 3 | Task 7 - C
// ============================================
// Assignment 1.7: Write a C program to delete all multiples of 4 from an array: {12, 15, 8, 9, 20, 7, 30}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {12, 15, 8, 9, 20, 7, 30};
    int size = sizeof(arr) / sizeof(arr[0]);

    int newSize = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 4 != 0)
        {
            arr[newSize++] = arr[i];
        }
    }
    size = newSize;

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
