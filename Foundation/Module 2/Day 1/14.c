#include <stdio.h>

int main()
{
    int myArray[5] = {10, 20, 30, 40, 50};
    int length = sizeof(myArray) / sizeof(myArray[0]);
    int sum = 0, average = 0, count = 0;

    for (int i = 0; i < length; i++)
    {
        sum += myArray[i];
    }
    average = sum / length;

    for (int i = 0; i < length; i++)
    {
        if (myArray[i] > average)
        {
            count += 1;
        }
    }
    printf("Number of elements are greater than the average of all elements in the array: %d", count);
}