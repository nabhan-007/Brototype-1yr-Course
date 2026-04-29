#include <stdio.h>

int main()
{
    int myArray[100] = {10, 20, 30, 40, 50};
    int items = 5;
    int newItem = 0;

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Moving elements one index to the right
    for (int i = items; i > 0; i--)
    {
        myArray[i] = myArray[i - 1];
    }

    // Adding new item to the 0th index of `myArray`
    myArray[0] = newItem;
    items += 1; // Incrementing 1 to `items` in `myArray`

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}