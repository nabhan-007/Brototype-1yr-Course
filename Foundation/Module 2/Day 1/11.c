#include <stdio.h>

int main()
{
    int myArray[7] = {25, 12, 8, 45, 3, 67, 19};
    int smallestNum = myArray[0];

    for (int i = 0; i < 7; i++)
    {
        if (smallestNum > myArray[i])
        {
            smallestNum = myArray[i];
        }
    }

    printf("The Smallest Number in the Array: %d", smallestNum);
}