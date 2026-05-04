#include <stdio.h>

int main()
{
    int myArray[7] = {12, 45, 23, 67, 34, 89, 10};
    int largestNum = myArray[0];

    for (int i = 0; i < 7; i++)
    {
        if (largestNum < myArray[i])
        {
            largestNum = myArray[i];
        }
    }

    printf("The Largest Number in the Array: %d", largestNum);
    return 0;
}