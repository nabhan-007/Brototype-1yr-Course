#include <stdio.h>

void sum(int a, int b) {
    int result;
    result = a + b;
    printf("%d", result);
}

void sum(int, int);
int main(void) {
    int a, b;
    printf("Enter 2 Numbers: \n");
    printf("> ");
    scanf("%d", &a);
    printf("> ");
    scanf("%d", &b);
    sum(a, b);    
    return 0;
}