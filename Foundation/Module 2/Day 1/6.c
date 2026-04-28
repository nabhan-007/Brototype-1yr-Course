#include <stdio.h>

int main()
{
    int myArray[6] = {5, 12, 18, 7, 25, 30};

    for (int i = 0; i < 6; i++)
    {
        if (myArray[i] > 10 && myArray[i] % 2 == 0)
        {
            printf("%d \n", myArray[i]);
        }
    }
}
