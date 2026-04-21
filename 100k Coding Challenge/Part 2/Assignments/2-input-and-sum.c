#include <stdio.h>

int main() {
    int num1;
    float num2, sum;
    
    printf("Enter an integer: ");
    scanf("%d", &num1);
    printf("Enter a float: ");
    scanf("%f", &num2);

    sum = num1 + num2;
    printf("Output: %.2f\n", sum);

    return 0;
}