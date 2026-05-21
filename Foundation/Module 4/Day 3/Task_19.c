// ============================================
// Module 4 | Day 3 | Task 19 - C
// ============================================
// Assignment 1.19: Write a C program to delete all duplicate elements (keep only first occurrence): {10, 15, 10, 20, 15, 30, 10}.
// ============================================
#include <stdio.h>

int main()
{
    int arr[] = {10, 15, 10, 20, 15, 30, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    // for (int i = 0; i < size; i++)
    // {
    //     for (int j = 0; j < size; j++)
    //     {
    //         if (arr[i] == arr[j] && i != j)
    //         {
    //             for (int k = j; k < size - 1; k++)
    //             {
    //                 arr[k] = arr[k + 1];
    //             }
    //             size--;
    //             j--;
    //         }
    //     }
    // }

    int write_index = 0;
    for (int i = 0; i < size; i++)
    {
        int isDuplicate = 0;
        for (int j = 0; j < write_index; j++)
        {
            if (arr[i] == arr[j])
            {
                isDuplicate = 1;
                break;
            }
        }

        if (!isDuplicate)
        {
            arr[write_index++] = arr[i];
        }
    }
    size = write_index;

    printf("New Array: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
