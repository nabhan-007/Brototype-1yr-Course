#include <stdio.h>

int main()
{
    int myArray[] = {10, 20, 30, 40, 50};
    int length = sizeof(myArray) / sizeof(myArray[0]);
    int index_of_num_to_delete = 2; // Deleting `30`

    printf("Old Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    // Deleting the value in index=2 by moving the remaining leftwards
    for (int i = index_of_num_to_delete; i < length - 1; i++)
    {
        myArray[i] = myArray[i + 1];
    }
    length -= 1;

    printf("\nNew Array: ");
    for (int i = 0; i < length; i++)
    {
        printf("%d ", myArray[i]);
    }

    return 0;
}