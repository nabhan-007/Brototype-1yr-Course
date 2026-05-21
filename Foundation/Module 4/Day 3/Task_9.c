// ============================================
// Module 4 | Day 3 | Task 9 - C
// ============================================
// Assignment 1.9: Write a C program to delete the smallest element from an array: {12, 7, 18, 5, 22, 9, 14}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {12, 7, 18, 5, 22, 9, 14};
    int size = sizeof(arr) / sizeof(arr[0]);

    int smallestNumIndex = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] < arr[smallestNumIndex])
        {
            smallestNumIndex = i;
        }
    }
    for (int i = smallestNumIndex; i < size; i++)
    {
        arr[i] = arr[i + 1];
    }
    size--;

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
