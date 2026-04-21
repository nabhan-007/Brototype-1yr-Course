#include <stdio.h>

int main()
{
    int choice, accountBal = 1000, amount, mini_statement[10], j, repeat, i = 0;

    for (;;)
    {
        printf("1: Deposit \n2: Withdraw \n3: Balance \n4: Mini Statement \n\nSelect one: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Please enter amount:");
            scanf("%d", &amount);
            accountBal = accountBal + amount;

            mini_statement[i] = amount;
            i++;
            break;
        case 2:
            printf("Please enter amount:");
            scanf("%d", &amount);
            accountBal = accountBal - amount;

            mini_statement[i] = (amount * -1);
            i++;
            break;
        case 3:
            printf("Balance: %d\n", accountBal);
            break;
        case 4:
            for (j = 0; j < 10; j++)
            {
                if (mini_statement[j] != 0)
                {
                    printf("%d\n", mini_statement[j]);
                }
            }
            printf("Balance: %d\n", accountBal);
            break;

        default:
            break;
        }

        printf("Do you want to continue? (1: Yes, 2: No): ");
        scanf("%d", &repeat);
        if (repeat == 2)
        {
            break;
        }
    }
}
