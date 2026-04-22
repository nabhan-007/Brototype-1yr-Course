#include <stdio.h>

int maxNum(int a, int b, int c)
{
    if (a > b)
    {
        if (a > c)
        {
            return a;
        }
    }
    else if (b > a)
    {
        if (b > c)
        {
            return b;
        }
    }
    else
    {
        return c;
    }
}

int main()
{
    int bigNum = maxNum(10, 25, 15);
    printf("Maximum Number: %d", bigNum);

    return 0;
}