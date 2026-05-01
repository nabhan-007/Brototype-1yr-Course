/*
Write a C program to reverse an array using a while loop. Array: {5, 8, 12, 3}
*/

#include <stdio.h>

int main()
{
    int myArray[] = {5, 8, 12, 3};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // reverse an array using while loop
    int start = 0, end = length - 1;
    int times_to_run = length / 2; // if odd the `int` will ignore the decimals

    while (times_to_run > 0)
    {
        int temp = myArray[start];
        myArray[start] = myArray[end];
        myArray[end] = temp;
        start++;        // Moving Right
        end--;          // Moving Left
        times_to_run--; // Decrementing `times_to_run`
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}