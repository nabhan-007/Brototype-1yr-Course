#include <stdio.h>

int main()
{
    int arr[] = {1, 3, 42, 1, 2};
    int size = 5;

    int large = arr[0];

    for (int i = 0; i < size; i++)
    {
        if (arr[i] > large)
        {
            large = arr[i];
        }
    }
    int freq[large + 1];

    for (int i = 0; i <= large; i++)
    {
        freq[i] = 0;
    }

    for (int i = 0; i < size; i++)
    {
        freq[arr[i]]++;
    }

    for (int i = 0; i <= large; i++)
    {
        if (freq[i] > 0)
        {
            printf("%d : %d \n", i, freq[i]);
        }
    }

    return 0;
}