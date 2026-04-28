#include <stdio.h>

int main()
{
    int sum = 0, myArray[6] = {8, 15, 22, 9, 30, 11};

    // Calculating sum of all the odd integers in `myArray`
    for (int i = 0; i < 6; i++)
    {
        if (myArray[i] % 2 == 1)
        {
            sum += myArray[i];
        }
    }
    printf("Sum: %d", sum);

    return 0;
}