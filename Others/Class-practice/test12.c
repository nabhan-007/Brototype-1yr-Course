#include <stdio.h>

int main()
{
    int myArray[] = {1, 22, 1, 4, 3, 1};
    int length = sizeof(myArray) / sizeof(myArray[0]);
    int total = 0;

    for (int i = 0; i < length; i++)
    {
        int count = 0, isVisited = 0;

        for (int j = 0; j < i; j++)
        {
            if (myArray[i] == myArray[j])
            {
                isVisited = 1;
                break;
            }
        }
        if (isVisited)
        {
            continue;
        }

        for (int j = 0; j < length; j++)
        {
            if (myArray[i] == myArray[j])
            {
                count += 1;
            }
        }

        if (count > 1)
        {
            printf("%d: %d\n", myArray[i], count);
        }
        else
        {
            printf("%d: %d\n", myArray[i], count);
        }
    }

    return 0;
}