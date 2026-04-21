#include <stdio.h>

int main() {
    int i, j, a[100], limit, count=0, temp;

    printf("Enter the limit of the Array (Max.: 100): ");
    scanf("%d", &limit);

    printf("Enter the %d Values of the Array: \n", limit);
    for (i=0; i<limit; i++) {
        printf("> ");
        scanf("%d", &a[i]);
    }

    for (i=0; i<(limit-1); i++) {
        for (j=i+1; j<limit; j++) {
            if (a[i]<a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    // Printing Array
    printf("Sorted Array a: [");
    for (i=0; i<limit; i++) {
        if (i==(limit-1)) {
            printf("%d]\n", a[i]);    
        } else {
            printf("%d, ", a[i]);
        }
    }
}
