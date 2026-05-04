/*
Write a C program to reverse an array in-place using a while loop, then print the reversed array.
Array: {3, 7, 14, 21, 35, 42}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {3, 7, 14, 21, 35, 42};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Reversing an array using a while loop
    int start = 0, end = length - 1;
    while (start < end)
    {
        int temp = myArray[start];
        myArray[start] = myArray[end];
        myArray[end] = temp;

        start++;
        end--;
    }

    // Printing the New Array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}
