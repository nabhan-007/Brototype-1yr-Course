#include <stdio.h>

int main()
{
    int count = 0, myArray[7] = {12, 7, 18, 5, 22, 9, 14};

    // Calculating sum of all the odd integers in `myArray`
    for (int i = 0; i < 7; i++)
    {
        if (myArray[i] % 3 == 0)
        {
            count += 1;
        }
    }
    printf("Number of multiples of 3: %d", count);

    return 0;
}