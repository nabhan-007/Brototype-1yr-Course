#include <stdio.h>

int main()
{
    int myArray[100] = {10, 20, 10, 20};
    int items = 4;
    int newItem = 8055;
    int newItemPosition = 3; // index=2

    printf("Old Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Shift the numbers to right from the position
    for (int i = items; i >= newItemPosition; i--)
    {
        myArray[i] = myArray[i - 1];
    }
    // Changeing the 3rd item(index=2) to `newItem`
    myArray[newItemPosition - 1] = newItem;
    items += 1;

    printf("\nNew Array: ");
    for (int i = 0; i < items; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}