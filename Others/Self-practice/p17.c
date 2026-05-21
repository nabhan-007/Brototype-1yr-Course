#include <stdio.h>

greet(char *name)
{
    printf("Hi, %s", name);
}

int main()
{
    char *name = "Nabhan";
    greet(name);
    return 0;
}