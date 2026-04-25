#include <stdio.h>

void changeValue(int);

int main()
{
    int original = 5;

    changeValue(original);
    printf("%d", original);
}

void changeValue(int x)
{
    x = 99;
}
// --------------------------------------
// [5], [5] => [5], [99] : Pass by Value
// [5] => [99] : Pass by Reference
// --------------------------------------
#include <stdio.h>

void changeValue(int *);

int main()
{
    int original = 5;

    changeValue(&original);
    printf("%d", original);
}

void changeValue(int *x)
{
    *x = 99;
}