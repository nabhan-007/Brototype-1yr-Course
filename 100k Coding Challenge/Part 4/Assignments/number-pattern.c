#include <stdio.h>

int main() {
    int i, j, limit=5;

    for (i=1; i<=limit; i++) {
        for (j=1; j<=i; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }

    for (i = limit; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }

    return 0;
}

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 