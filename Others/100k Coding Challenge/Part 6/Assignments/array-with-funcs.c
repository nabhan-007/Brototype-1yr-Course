// Used AI
// Used AI
// Used AI
// Used AI
// Used AI
// Used AI

#include <stdio.h>

// Function 1: Get the data
int getArray(int arr[100][100]) {
    int i, j, limit;
    printf("Enter the size of arrays\nInput: ");
    scanf("%d", &limit);
    
    if (limit > 100) {
        printf("Limit too high! Keep it under 100.\n");
        return 1; 
    }

    printf("Enter the values of the array\nInput:\n");
    for (i = 0; i < limit; i++) {       
        for (j = 0; j < limit; j++) {   
            scanf("%d", &arr[i][j]);
        }
    }
    return limit; // Send the limit back to main
}

// Function 2: Display the data
void displayArray(int arr[100][100], int limit) {
    int i, j;
    printf("Output: Array values are:\n");
    for (i = 0; i < limit; i++) {       
        for (j = 0; j < limit; j++) {   
            printf("%d ", arr[i][j]); // Added a space!
        }
        printf("\n"); // Drop to the next line after a row finishes!
    }
}

// Function 3: The VIP Manager
int main(void) {
    int arr[100][100], limit;
    
    // Pass JUST the name 'arr' to hand over the memory address
    limit = getArray(arr); 
    
    // Pass the array address and the size limit so it knows when to stop printing
    displayArray(arr, limit); 
    
    return 0;
}