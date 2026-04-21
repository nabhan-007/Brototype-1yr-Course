#include <stdio.h>

int main() {
    int i, a[100], limit, count=0;

    printf("Enter the limit of the Array (Max.: 100): ");
    scanf("%d", &limit);

    printf("Enter the %d Values of the Array: \n", limit);
    for (i=0; i<limit; i++) {
        printf("> ");
        scanf("%d", &a[i]);
    }

    for (i=0; i<limit; i++) {
        if (a[i]%2 == 0) {
            count = count + 1;
        }
    }
    printf("Number of even numbers in the given array: %d", count);
}
