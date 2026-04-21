#include <stdio.h>

int main() {
    int i, sum;

    // for(initialization, Condition, Updation) {}
    for (i=0; i<10; i++) {
        printf("%d\n", i);
    }

    for (i=0; i<10; i++) {
        sum = sum + i;
    }
    printf("Sum of 0 to 9: %d", sum);
}