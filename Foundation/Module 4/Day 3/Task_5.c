// ============================================
// Module 4 | Day 3 | Task 5 - C
// ============================================
// Assignment 1.5: Write a C program to replace all duplicate numbers with -1 in an array: {10, 15, 10, 20, 15, 30}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {10, 15, 10, 20, 15, 30};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        int isDuplicate = 0;
        for (int j = 0; j < size; j++)
        {
            if (arr[i] == arr[j] && i != j)
            {
                arr[j] = (-1);
                isDuplicate = 1;
            }
        }
        if (isDuplicate)
        {
            arr[i] = (-1);
        }
    }

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
