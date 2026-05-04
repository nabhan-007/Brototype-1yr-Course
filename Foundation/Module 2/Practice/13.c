/*
Write a C program to find the sum of all elements. If sum > 100, replace all odd numbers with 0. If sum <= 100, replace all even numbers with 0.
Then print the final array and its new sum.
Array: {12, 9, 18, 7, 24, 15}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {12, 9, 18, 7, 24, 15};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Calculating Sum
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }

    // If sum > 100, replace all odd numbers with 0. If sum <= 100, replace all even numbers with 0.
    if (sum <= 100)
    {
        for (int i = 0; i < length; i++)
        {
            if (myArray[i] % 2 == 0)
            {
                myArray[i] = 0;
            }
        }
    }
    else
    {
        for (int i = 0; i < length; i++)
        {
            if (myArray[i] % 2 != 0)
            {
                myArray[i] = 0;
            }
        }
    }

    // printing the final array and its new sum
    sum = 0;
    printf("\nFinal Array: ");
    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
        printf("%d ", myArray[i]);
    }
    printf("\nSum: %d", sum);

    return 0;
}
