#include <stdio.h>

int main() {
    int i, j, a[5], sum=0, search_value, temp;

    // User adding 5 values to the array `a`
    printf("Enter 5 Values:\n");
    for (i=0; i<5; i++) {
        printf("> ");
        scanf("%d", &a[i]);
    }

    // Printing Array
    printf("Array a: [");
    for (i=0; i<5; i++) {
        if (i==4) {
            printf("%d]\n", a[i]);    
        } else {
            printf("%d, ", a[i]);
        }
    }

    // Sum of Array
    for (i=0; i<5; i++) {
        sum = sum + a[i];
    }
    printf("Sum of the Array: %d\n", sum);

    // Search from an array
    printf("Enter Value to Search: ");
    scanf("%d", &search_value);
    for (i=0; i<5; i++) {
        if (search_value==a[i]) {
            printf("Value Found at Position: %d\n", i+1);
            break;
        }
    }

    // Selection Sort
    for (i=0; i<(5-1); i++) {
        for (j=(i+1); j<5; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    // Printing Array
    printf("Sorted Array a: [");
    for (i=0; i<5; i++) {
        if (i==4) {
            printf("%d]\n", a[i]);    
        } else {
            printf("%d, ", a[i]);
        }
    }
    return 0;
}