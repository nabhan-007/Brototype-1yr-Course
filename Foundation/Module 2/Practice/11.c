/*
Write a C program to replace all duplicate numbers with -1 in an array, then delete all -1 values (keep only unique elements).
Array: {10, 15, 10, 20, 15, 30, 20}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30, 20};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    // Printing the OG Array
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // replace all duplicate numbers with -1
    for (int i = 0; i < length; i++)
    {
        int isDuplicate = 0;
        for (int j = 0; j < length; j++)
        {
            if (i != j && myArray[i] == myArray[j])
            {
                myArray[j] = (-1);
                isDuplicate = 1;
            }
        }
        if (isDuplicate)
        {
            myArray[i] = (-1);
        }
    }

    // delete all -1 values (keep only unique elements)
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] == (-1))
        {
            for (int j = i; j < length - 1; j++)
            {
                myArray[j] = myArray[j + 1];
            }
            length--;
            i--;
        }
    }

    // Printing the New Array
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}
