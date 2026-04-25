#include <stdio.h>

// [5], [5] => [5], [99] : Pass by Value
// [5] => [99] : Pass by Reference

void messUp(int *);

int main()
{
    int original = 5;

    // messUp(original);
    // printf("%d", original);

    messUp(&original);
    printf("%d", original);
}

void messUp(int *x)
{
    *x = 99;
}

// void messUp(int x)
// {
//     x = 99;
// }