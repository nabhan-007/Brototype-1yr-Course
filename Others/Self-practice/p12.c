/*
Even numbers to right and odd numbers to left
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int myArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG arrays
    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Moving even numbers to right and odd numbers to left
    for (int i = 0; i < length; i++)
    {
        for (int j = length - 1; j >= 0; j--)
        {
            if (myArray[i] % 2 != 0 && myArray[j] % 2 == 0)
            {
                int temp = myArray[j];
                myArray[j] = myArray[i];
                myArray[i] = temp;
                i--;
                j++;
            }
        }
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}