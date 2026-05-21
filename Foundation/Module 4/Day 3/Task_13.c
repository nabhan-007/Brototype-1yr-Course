// ============================================
// Module 4 | Day 3 | Task 13 - C
// ============================================
// Assignment 1.13: Write a C program to sort an array in ascending order (without using built-in functions). Array: {5, 2, 8, 1, 9, 3}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {5, 2, 8, 1, 9, 3};
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

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
