/*
Write a C program to count how many elements are greater than the average of all elements in the array: {10, 20, 30, 40, 50, 60}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 20, 30, 40, 50, 60};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Computing the Sum
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }

    // Computing average
    float average = (float)sum / (float)length;
    printf("Avg: %.2f", average);

    // Printing the count of elements greater than the average
    int count = 0;
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] > average)
        {
            count++;
        }
    }
    printf("\nCount of elements greater than the average: %d", count);

    return 0;
}
