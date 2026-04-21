// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    int num1, num2, oper, output;
    printf("Enter two numbers: ");
    scanf("%d%d", &num1, &num2);
    
    printf("1: Addition\n2: Subtraction\n3: Multiplication\n4: Division");
    printf("Select Operator: ");
    scanf("%d", &oper);
    
    switch(oper) {
        case 1:
            output = num1 + num2;
            break;
        case 2:
            output = num1 - num2;
            break;
        case 3:
            output = num1 * num2;
            break;
        case 4:
            output = num1 / num2;
            break;
        default:
            printf("Invalid Operator");
    }
    printf("Output: %d", output);

    return 0;
}