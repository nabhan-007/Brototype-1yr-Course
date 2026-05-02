/*
Write a C program to replace all multiples of 3 with 0, then find the sum of all elements: {6, 15, 10, 9, 30, 25}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {6, 15, 10, 9, 30, 25};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // replacing all multiples of 3 with 0
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 3 == 0)
        {
            myArray[i] = 0;
        }
    }
    // Optimization: Can combine the above and below loop just add to sum after assigning `0`
    // find the sum of all elements
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nSum: %d", sum);

    return 0;
}