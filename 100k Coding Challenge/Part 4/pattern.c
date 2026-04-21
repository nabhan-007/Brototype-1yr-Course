#include <stdio.h>

int main() {
    int i, j, rows=10;

    // Normal
    for (i=1; i<=rows; i++) {
        for (j=0; j<i; j++) {
            printf("*");
        }
        printf("\n");
    }
    printf("\n");
    // Upside Down
    for (i=0; i<=rows; i++) {
        for (j=0; j<rows-i; j++) {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}