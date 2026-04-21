// Used AI
// Used AI
// Used AI
// Used AI
// Used AI
// Used AI

#include <stdio.h>

int main(void) {
    int i, j, limit;

    // 1. Hardcode a massive grid to keep the compiler happy
    int arr1[100][100];
    int arr2[100][100];
    int sum[100][100];

    printf("Enter the size of arrays\nInput: ");
    scanf("%d", &limit);

    // Safety check so the user doesn't break our 100x100 limit
    if (limit > 100) {
        printf("Limit too high! Keep it under 100.\n");
        return 1; 
    }

    // 2. Fill the first array (only up to 'limit')
    printf("Output: Enter the values of array 1\nInput:\n");
    for (i = 0; i < limit; i++) {       
        for (j = 0; j < limit; j++) {   
            scanf("%d", &arr1[i][j]);
        }
    }

    // 3. Fill the second array
    printf("Output: Enter the values of array 2\nInput:\n");
    for (i = 0; i < limit; i++) {
        for (j = 0; j < limit; j++) {
            scanf("%d", &arr2[i][j]);
        }
    }

    // 4. Calculate and print
    printf("Output: Sum of 2 arrays is:\n");
    for (i = 0; i < limit; i++) {
        for (j = 0; j < limit; j++) {
            sum[i][j] = arr1[i][j] + arr2[i][j];
            printf("%d ", sum[i][j]); 
        }
        printf("\n"); 
    }

    return 0;
}