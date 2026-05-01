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
    for (int i = 0; i < length; i++)
    {
        if (myArray[i] % 2 != 0)
        {
            for (int j = i; j < length; j++)
            {
                myArray[j + 1] = myArray[j + 3];
            }
            if (length - i > 2)
            {
                length -= 2;
            }
        }
    }

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }
    printf("\nExpected: 5 8 7 12 18");
    // printf("\nExpected: 1 4 5 8 9");

    return 0;
}