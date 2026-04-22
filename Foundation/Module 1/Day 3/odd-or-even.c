#include <stdio.h>

char *even_or_odd(int num)
{
    if (num % 2 == 0)
    {
        return "EVEN";
    }
    else
    {
        return "ODD";
    }
}

int main()
{
    int num = 25;
    char *result;

    result = even_or_odd(num);
    printf("`%d` is %s Number", num, result);
}