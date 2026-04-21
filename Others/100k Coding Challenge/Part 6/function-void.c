#include <stdio.h>

void sum() {
    int a, b, sum2;
    printf("Enter 2 Numbers: \n");
    printf("> ");
    scanf("%d", &a);
    printf("> ");
    scanf("%d", &b);
    sum2 = a + b;
    printf("%d", sum2);
}

void sum();
int main(void) {
    sum();    
    return 0;
}