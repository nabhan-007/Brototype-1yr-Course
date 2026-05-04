/*
get an array from users
UnSorted: Smallest, Largest, 2nd Largest
Count the frequency of each element in an array
*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int length;
    printf("Enter the length of the Array: ");
    scanf("%d", &length);
    int *myArray = malloc(length * sizeof(int));

    printf("Provide your array inputs: \n");
    for (int i = 0; i < length; i++)
    {
        printf("> ");
        scanf("%d", &myArray[i]);
    }

    // Printing the OG arrays
    printf("\nOG Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Smallest
    int smallest = myArray[0];
    for (int i = 1; i < length; i++)
    {
        if (smallest > myArray[i])
        {
            smallest = myArray[i];
        }
    }
    printf("\nSmallest: %d", smallest);
    // Largest
    int largest = myArray[0];
    for (int i = 1; i < length; i++)
    {
        if (largest < myArray[i])
        {
            largest = myArray[i];
        }
    }
    printf("\nLargest: %d", largest);
    int second_largest = myArray[0];
    for (int i = 0; i < length; i++)
    {
        if (second_largest != largest)
        {
            break;
        }
        second_largest = myArray[i];
    }

    for (int i = 0; i < length; i++)
    {
        if (myArray[i] > second_largest && myArray[i] < largest)
        {
            second_largest = myArray[i];
        }
    }
    printf("\nSecond Largest: %d", second_largest);

    // Frequency
    for (int i = 0; i < length; i++)
    {
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

        int count = 0;
        for (int j = 0; j < length; j++)
        {
            if (myArray[i] == myArray[j])
            {
                count++;
            }
        }

        printf("\n%d => %d", myArray[i], count);
    }

    // Printing the New arrays
    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    free(myArray);
    return 0;
}
