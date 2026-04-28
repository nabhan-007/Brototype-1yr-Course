#include <stdio.h>

int main()
{
    int num = 3, myArray[5];

    // Adding integers to `myArray`
    for (int i = 0; i < 5; i++)
    {
        myArray[i] = num;
        num += 3;
    }

    for (int i = 0; i < 5; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d \n", myArray[i]);
        }
    }

    return 0;
}