#include <stdio.h>

int main()
{
    int sum = 0, myArray[10];

    // Adding 10 integers to `myArray`
    for (int i = 0; i < 10; i++)
    {
        myArray[i] = i + 1;
    }

    // Calculating sum of all the integers in `myArray`
    for (int i = 0; i < 10; i++)
    {
        sum += myArray[i];
    }
    printf("Sum: %d", sum);

    return 0;
}