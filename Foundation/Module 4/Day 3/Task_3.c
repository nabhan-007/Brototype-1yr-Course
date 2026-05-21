// ============================================
// Module 4 | Day 3 | Task 3 - C
// ============================================
// Assignment 1.3: Write a C program to replace all multiples of 3 with 0 and all multiples of 2 with 1 in an array: {9, 10, 15, 8, 12, 25, 30}. (If multiple of both, replace with 1)
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {9, 10, 15, 8, 12, 25, 30};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0 && arr[i] % 3 == 0)
        {
            arr[i] = 1;
        }
        else if (arr[i] % 3 == 0)
        {
            arr[i] = 0;
        }
        else if (arr[i] % 2 == 0)
        {
            arr[i] = 1;
        }
    }

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
