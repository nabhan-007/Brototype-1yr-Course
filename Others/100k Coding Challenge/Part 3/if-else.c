#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    printf("Enter a Number: ");
    scanf("%d", &num);

    if (num>=0) {
        printf("Positive Number!!");
    } else {
        printf("Negative Number!!");
    }
}