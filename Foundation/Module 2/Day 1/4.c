#include <stdio.h>

int main()
{
    int num = 5, myArray[5];

    for (int i = 0; i < 5; i++)
    {
        if (i % 2 == 0)
        {
            num += 5;
            myArray[i] = num;
        }
        else
        {
            num += 15;
            myArray[i] = num;
        }
    }

    for (int i = 0; i < 5; i++)
    {
        if (myArray[i] > 20)
        {
            printf("%d \n", myArray[i]);
        }
    }

    return 0;
}