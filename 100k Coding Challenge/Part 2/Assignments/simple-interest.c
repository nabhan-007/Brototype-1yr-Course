#include <stdio.h>

int main() {
    int P;
    float R, n, SI;

    printf("Enter the Principal Amount: ");
    scanf("%d", &P);

    printf("Enter the Interest Rate: ");
    scanf("%f", &R);

    printf("Enter the number of years: ");
    scanf("%f", &n);

    SI = (P*R*n)/100;
    printf("Simple Interest: %.2f", SI);

    return 0;
}