/*
Write a C program to find the average of all unique array elements: {10, 15, 10, 20, 15, 30}.
*/
#include <stdio.h>

int main()
{
    int myArray[] = {10, 15, 10, 20, 15, 30};
    int length = sizeof(myArray) / sizeof(myArray[0]);

    printf("OG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Average of all unique array elements
    int total_of_unique_elements = 0, count_of_unique_elements = 0;
    printf("\nUnique Elements: ");
    for (int i = 0; i < length; i++)
    {
        int isUnique = 1;
        for (int j = 0; j < length; j++)
        {
            if (i != j && myArray[i] == myArray[j])
            {
                isUnique = 0;
                break;
            }
        }
        if (isUnique)
        {
            total_of_unique_elements += myArray[i];
            printf("%d ", myArray[i]);
            count_of_unique_elements += 1;
        }
    }
    printf("\nCount of Unique Elements: %d", count_of_unique_elements);
    int average = total_of_unique_elements / count_of_unique_elements;
    printf("\nAverage of all unique elements: %d (%d/%d)", average, total_of_unique_elements, count_of_unique_elements);

    return 0;
}