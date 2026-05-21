// ============================================
// Module 4 | Day 3 | Task 1 - C
// ============================================
// Assignment 1.1: Write a C program to replace all even numbers with 1 and all odd numbers with 0 in an array: {12, 7, 18, 9, 24, 11, 30}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {12, 7, 18, 9, 24, 11, 30};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
        {
            arr[i] = 1;
        }
        else
        {
            arr[i] = 0;
        }
    }

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
