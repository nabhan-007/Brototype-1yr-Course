#include <stdio.h>

int main()
{
    int limit = 10;
    int count = 0, myArray[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    for (int i = 0; i < limit; i++)
    {
        if (myArray[i] % 2 == 0)
        {
            count += 1;
        }
    }

    printf("Even: %d \nOdd: %d", count, limit - count);
}