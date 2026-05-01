/*
Write a C program to count the frequency of only odd numbers in an array: {12, 7, 18, 9, 24, 11, 9, 7}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {12, 7, 18, 9, 24, 11, 9, 7};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // counting the frequency of only odd numbers
    printf("\nFrequency of only odd numbers:-");
    for (int i = 0; i < length; i++)
    {
        // Optimization: Need to run the below code only if the value is odd
        if (myArray[i] % 2 == 0)
        {
            continue;
        }

        // Checking if the number is already checked
        int isVisited = 0;
        for (int j = 0; j < i; j++)
        {
            if (myArray[i] == myArray[j])
            {
                isVisited = 1;
            }
        }
        if (isVisited)
        {
            continue;
        }

        // If not already checked and if odd then print frequency
        int count = 0;
        for (int j = 0; j < length; j++)
        {
            if (myArray[i] == myArray[j])
            {
                count += 1;
            }
        }
        printf("\n%d: %d", myArray[i], count);
    }
    return 0;
}
