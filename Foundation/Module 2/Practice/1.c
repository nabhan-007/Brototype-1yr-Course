/*
Write a C program to find the second largest number in an array: {34, 12, 89, 56, 23, 78}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {34, 12, 89, 56, 23, 78};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Sorting in acsending order
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

    // Printing the New Array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // second largest number in an array
    printf("\nThe second largest number in an array: %d", myArray[length - 2]);

    return 0;
}
