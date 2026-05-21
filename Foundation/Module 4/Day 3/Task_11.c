// ============================================
// Module 4 | Day 3 | Task 11 - C
// ============================================
// Assignment 1.11: Write a C program to Skip Two elements after every multiple of 3 in an array: {3, 10, 15, 8, 20, 9, 25, 12}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {3, 10, 15, 8, 20, 9, 25, 12};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
        if (arr[i] % 3 == 0)
        {
            i += 2;
        }
    }

    return 0;
}
