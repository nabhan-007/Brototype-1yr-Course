// Online C compiler to run C program online
#include <stdio.h>

int main()
{
    int arr[5], i, sum = 0;

    for (i = 0; i < 5; i++) {
        arr[i] = i;
    }
    for (i = 0; i < 5; i++) {
        sum = sum + arr[i];
    }

    for (i = 0; i < 5; i++) {
        printf("%d\n", arr[i]);
    }
    printf("\n Sum of the Array: %d", sum);
}