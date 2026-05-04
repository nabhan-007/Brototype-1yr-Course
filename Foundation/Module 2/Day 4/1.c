/*
Write a C program to reverse an array in-place (without using extra arrays). Array: {5, 10, 15, 20, 25}
*/
#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 20, 25};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // reverse an array in-place
    int start = 0;                 // Left pointer to swap the elements
    int end = length - 1;          // Right pointer to swap the elements
    int times_to_run = length / 2; // if odd the `int` will ignore the decimals

    for (int i = 0; i < times_to_run; i++)
    {
        int temp = myArray[start];
        myArray[start] = myArray[end];
        myArray[end] = temp;
        start++; // Moving Right
        end--;   // Moving Left
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}