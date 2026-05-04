/*
Write a C program to find the average of all elements. If average > 20, sort in descending order. If average <= 20, sort in ascending order.
Array: {15, 8, 25, 12, 30, 5}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {15, 8, 25, 12, 30, 5};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Calculating Sum and Average
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }
    int average = sum / length;
    printf("\nAverage: %d", average);

    // If average > 20, sort in descending order. If average <= 20, sort in ascending order.
    if (average <= 20)
    {
        for (int i = 0; i < length; i++)
        {
            for (int j = 0; j < length - 1; j++)
            {
                if (myArray[j] > myArray[j + 1])
                {
                    int temp = myArray[j];
                    myArray[j] = myArray[j + 1];
                    myArray[j + 1] = temp;
                }
            }
        }
    }
    else
    {
        for (int i = 0; i < length; i++)
        {
            for (int j = 0; j < length - 1; j++)
            {
                if (myArray[j] < myArray[j + 1])
                {
                    int temp = myArray[j];
                    myArray[j] = myArray[j + 1];
                    myArray[j + 1] = temp;
                }
            }
        }
    }

    // Printing the sorted Array
    printf("\nSorted Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    return 0;
}
