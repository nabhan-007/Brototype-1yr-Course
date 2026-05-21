// ============================================
// Module 4 | Day 3 | Task 17 - C
// ============================================
// Assignment 1.17: Write a C program to find and print all unique elements in an array (elements that appear only once): {10, 15, 10, 20, 15, 30}.
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
                isDuplicate = 1;
            }
        }

        if (!isDuplicate)
        {
            printf("%d ", arr[i]);
        }
    }

    return 0;
}
