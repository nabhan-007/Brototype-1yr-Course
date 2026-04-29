#include <stdio.h>

int main()
{
    int myArray[100] = {10, 20, 30, 40, 50};
    int items = 5;
    int newItem = 60;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Adding a new item at the end of `myArray`
    myArray[items] = newItem;
    items += 1; // Incrementing 1 to `items` in `myArray`

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}