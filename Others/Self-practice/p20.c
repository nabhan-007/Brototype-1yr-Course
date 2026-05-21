/*
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
*/

#include <stdio.h>

int main()
{
    int arr[7][7];
    int start = 0;
    int end = 6;
    int value = 4;

    // Layer by layer: fill from outside to inside
    while (value >= 1)
    {
        for (int i = start; i <= end; i++)
        {
            for (int j = start; j <= end; j++)
            {
                arr[i][j] = value;
            }
        }
        start++; // Move the top-left corner inward
        end--;   // Move the bottom-right corner inward
        value--; // Drop the number for the next inner box
    }

    // Print the completed canvas
    for (int i = 0; i < 7; i++)
    {
        for (int j = 0; j < 7; j++)
        {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}