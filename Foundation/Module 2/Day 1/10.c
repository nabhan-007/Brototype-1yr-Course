#include <stdio.h>

int main()
{
    int largestNum = 0, myArray[7] = {12, 45, 23, 67, 34, 89, 10};

    for (int i = 0; i < 7; i++)
    {
        if (largestNum < myArray[i])
        {
            largestNum = myArray[i];
        }
    }

    printf("The Largest Number in the Array: %d", largestNum);
}