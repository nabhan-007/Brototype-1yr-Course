#include <stdio.h>
#include <stdbool.h>

int main()
{
    int myArray[5] = {15, 23, 8, 42, 17};
    int num_to_search = 42;
    bool found = false;

    for (int i = 0; i < 5; i++)
    {
        if (myArray[i] == num_to_search)
        {
            found = true;
            printf("%d is found at: %d (counting from zero)", num_to_search, i);
        }
    }

    if (found != true)
    {
        printf("NOT FOUND!!");
    }
}