#include <stdio.h>

int main()
{
    int myArray[5] = {12, 8, 15, 20, 9}; // Didn't find a pattern between values

    for (int i = 0; i < 5; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            printf("%d \n", i);
        }
    }

    return 0;
}