#include <stdio.h>

int main()
{
    int n = 9, i, j;
    // printf("Enter the number of rows to show number pattern: ");
    // scanf("%d", &n);

    for (i=1; i<=n; i++) {
        for (j=1; j<=n; j++) {
            if (j<=i) {
                printf("%d", j);
            } else {
                printf(" ");
            }
        }
        
        for (j=n; j>=1; j--) {
            if (j<=i) {
                printf("%d", j);
            } else {
                printf(" ");
            }
        }

        printf("\n");
    }
}