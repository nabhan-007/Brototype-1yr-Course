// Ai Code : NOT CLEAR
// Ai Code : NOT CLEAR
// Ai Code : NOT CLEAR
// Ai Code : NOT CLEAR
// Ai Code : NOT CLEAR

/*
Write a C program to delete TWO elements after every odd number in an array: {5, 10, 15, 8, 7, 20, 9, 12, 18}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {5, 10, 15, 8, 7, 20, 9, 12, 18};
    // int myArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // delete TWO elements after every odd number
    // THE SIMPLE WAY: Just overwrite the array as you go
    int newLength = 0;

    for (int i = 0; i < length; i++)
    {
        myArray[newLength] = myArray[i]; // Keep the current number
        newLength++;                     // Move the write position up

        // If it's an odd number, aggressively skip the next two elements
        if (myArray[i] % 2 != 0)
        {
            i += 2; // The loop's i++ will handle moving past them entirely
        }
    }

    length = newLength; // Update your official length

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nExpected: 5 8 7 12 18");
    // printf("\nExpected: 1 4 5 8 9");

    return 0;
}