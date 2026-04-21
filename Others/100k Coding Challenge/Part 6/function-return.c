#include <stdio.h>

int sum(int a, int b) {
    int result;
    result = a + b;
    return result;
}

int sum(int, int);
int main(void) {
    int a, b, c;
    printf("Enter 2 Numbers: \n");
    printf("> ");
    scanf("%d", &a);
    printf("> ");
    scanf("%d", &b);
    c = sum(a, b);
    printf("%d", c);
    return 0;
}