#include <stdio.h>

int add(int x, int y)
{
    int result = x + y;
    return result;
}

int main()
{
    int sum = add(10, 20);
    printf("%d", sum);

    return 0;
}