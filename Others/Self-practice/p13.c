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
    // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

    // Moving even numbers to right and odd numbers to left
    int from_left = 0, from_right = length - 1;

    while (from_left < from_right)
    {
        // If odd number, move on else while loop stops
        while (myArray[from_left] % 2 != 0 && from_left < from_right)
        {
            from_left++;
        }

        // If even number, move on else while loop stops
        while (myArray[from_right] % 2 == 0 && from_left < from_right)
        {
            from_right--;
        }

        // Swap the elements
        if (from_left < from_right)
        {
            // Swapping using `temp` variable
            int temp = myArray[from_left];
            myArray[from_left] = myArray[from_right];
            myArray[from_right] = temp;

            // move one place to not check this value again
            from_left++;
            from_right--;
        }
    }

    // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}