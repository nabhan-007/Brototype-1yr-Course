#include <stdio.h>

int main() {
    int i, a[100], b[100], limit, temp[100];

    printf("Enter the limit of the Array (Max.: 100): ");
    scanf("%d", &limit);

    printf("Enter the %d Values of Array 1: \n", limit);
    for (i=0; i<limit; i++) {
        printf("> ");
        scanf("%d", &a[i]);
    }
    printf("Enter the %d Values of Array 2: \n", limit);
    for (i=0; i<limit; i++) {
        printf("> ");
        scanf("%d", &b[i]);
    }

    // Printing Array
    printf("Array 1: [");
    for (i=0; i<limit; i++) {
        if (i==(limit-1)) {
            printf("%d]\n", a[i]);    
        } else {
            printf("%d, ", a[i]);
        }
    }
    printf("Array 2: [");
    for (i=0; i<limit; i++) {
        if (i==(limit-1)) {
            printf("%d]\n", b[i]);    
        } else {
            printf("%d, ", b[i]);
        }
    }

    // Swapping Values of 2 Arrays
    printf("Swapping Arrays...");
    for (i=0; i<limit; i++) {
        temp[i] = a[i];
    }
    for (i=0; i<limit; i++) {
        a[i] = b[i];
    }
    for (i=0; i<limit; i++) {
        b[i] = temp[i];
    }

    // Printing Array
    printf("Array 1: [");
    for (i=0; i<limit; i++) {
        if (i==(limit-1)) {
            printf("%d]\n", a[i]);    
        } else {
            printf("%d, ", a[i]);
        }
    }
    printf("Array 2: [");
    for (i=0; i<limit; i++) {
        if (i==(limit-1)) {
            printf("%d]\n", b[i]);    
        } else {
            printf("%d, ", b[i]);
        }
    }
}