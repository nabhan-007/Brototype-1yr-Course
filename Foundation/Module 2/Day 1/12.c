#include <stdio.h>

int main()
{
    int myArray[6] = {12, 25, 8, 30, 15, 20};
    int largestNum = myArray[0];

    for (int i = 0; i < 6; i++)
    {
        if (largestNum < myArray[i] && myArray[i] % 2 == 0)
        {
            largestNum = myArray[i];
        }
    }

    printf("The Largest Even Number in the Array: %d", largestNum);
    return 0;
}