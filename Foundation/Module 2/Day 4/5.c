/*
Write a C program to sort an array, then count the number of unique elements. Array: {4, 5, 4, 6, 6, 7, 8}
*/
#include <stdio.h>

int main()
{
    int myArray[] = {4, 5, 4, 6, 6, 7, 8};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // sorting array in ascending order
    for (int i = 0; i < length; i++)
    {
        for (int j = 0; j < length - i - 1; j++)
        {
            if (myArray[j] > myArray[j + 1])
            {
                int temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
        }
    }
    // counting the number of unique elements
    int count = 0, streak = 1;
    for (int i = 0; i < length; i++)
    {
        // We can afford to do this because the array is sorted
        if (i != length - 1 && myArray[i] == myArray[i + 1]) // No checking on last element also this should be written first as C reads the if statements from left to right
        {
            streak++;
        }
        else
        {
            if (streak == 1)
            {
                count++;
            }
            streak = 1;
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nUnique Elements: %d", count);

    return 0;
}