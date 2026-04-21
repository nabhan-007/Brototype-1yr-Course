#include <stdio.h>

int main() {
    int limit, i, sum=0;

    printf("Enter a Limit: ");
    scanf("%d", &limit);

    for (i=1; i<=limit; i++) {
        if (i%2 != 0) {
            sum = sum + i;
        }
    }
    printf("Sum of odd number upto %d: %d", limit, sum);

    return 0;
}