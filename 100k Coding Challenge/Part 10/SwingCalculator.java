// Ai Generated
// Ai Generated
// Ai Generated
// Ai Generated
// Ai Generated

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SwingCalculator implements ActionListener {
    // 1. Declare UI Components
    JFrame frame;
    JTextField display;
    JButton[] numberButtons = new JButton[10];
    JButton[] functionButtons = new JButton[8];
    JButton addBtn, subBtn, mulBtn, divBtn, decBtn, equBtn, delBtn, clrBtn;
    JPanel panel;

    // 2. State Variables
    double num1 = 0, num2 = 0, result = 0;
    char operator;

    public SwingCalculator() {
        // Setup the main window
        frame = new JFrame("Nabhan's Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 550);
        frame.setLayout(null);

        // Setup the screen
        display = new JTextField();
        display.setBounds(50, 25, 300, 50);
        display.setFont(new Font("Arial", Font.BOLD, 24));
        display.setEditable(false);

        // Initialize Function Buttons
        addBtn = new JButton("+");
        subBtn = new JButton("-");
        mulBtn = new JButton("*");
        divBtn = new JButton("/");
        decBtn = new JButton(".");
        equBtn = new JButton("=");
        delBtn = new JButton("Del");
        clrBtn = new JButton("Clr");

        functionButtons[0] = addBtn;
        functionButtons[1] = subBtn;
        functionButtons[2] = mulBtn;
        functionButtons[3] = divBtn;
        functionButtons[4] = decBtn;
        functionButtons[5] = equBtn;
        functionButtons[6] = delBtn;
        functionButtons[7] = clrBtn;

        // Attach listeners and styling to function buttons
        for (int i = 0; i < 8; i++) {
            functionButtons[i].addActionListener(this);
            functionButtons[i].setFont(new Font("Arial", Font.BOLD, 20));
            functionButtons[i].setFocusable(false);
        }

        // Initialize and attach listeners to number buttons
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberButtons[i].setFont(new Font("Arial", Font.BOLD, 20));
            numberButtons[i].setFocusable(false);
        }

        // Position the Delete and Clear buttons
        delBtn.setBounds(50, 430, 145, 50);
        clrBtn.setBounds(205, 430, 145, 50);

        // Setup the Grid layout for the numbers
        panel = new JPanel();
        panel.setBounds(50, 100, 300, 300);
        panel.setLayout(new GridLayout(4, 4, 10, 10));

        // Add buttons to the grid (Order matters!)
        panel.add(numberButtons[7]);
        panel.add(numberButtons[8]);
        panel.add(numberButtons[9]);
        panel.add(addBtn);
        panel.add(numberButtons[4]);
        panel.add(numberButtons[5]);
        panel.add(numberButtons[6]);
        panel.add(subBtn);
        panel.add(numberButtons[1]);
        panel.add(numberButtons[2]);
        panel.add(numberButtons[3]);

        panel.add(mulBtn);
        panel.add(decBtn);
        panel.add(numberButtons[0]);
        panel.add(equBtn);
        panel.add(divBtn);

        // Add everything to the frame
        frame.add(panel);
        frame.add(delBtn);
        frame.add(clrBtn);
        frame.add(display);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        new SwingCalculator(); // Boot it up
    }

    // 3. The Brains (Handling Clicks)
    @Override
    public void actionPerformed(ActionEvent e) {
        // If a number is clicked, append it to the screen
        for (int i = 0; i < 10; i++) {
            if (e.getSource() == numberButtons[i]) {
                display.setText(display.getText().concat(String.valueOf(i)));
            }
        }

        if (e.getSource() == decBtn) {
            display.setText(display.getText().concat("."));
        }

        // If an operator is clicked, save the first number and clear screen
        if (e.getSource() == addBtn) {
            num1 = Double.parseDouble(display.getText());
            operator = '+';
            display.setText("");
        }
        if (e.getSource() == subBtn) {
            num1 = Double.parseDouble(display.getText());
            operator = '-';
            display.setText("");
        }
        if (e.getSource() == mulBtn) {
            num1 = Double.parseDouble(display.getText());
            operator = '*';
            display.setText("");
        }
        if (e.getSource() == divBtn) {
            num1 = Double.parseDouble(display.getText());
            operator = '/';
            display.setText("");
        }

        // If equals is clicked, do the math
        if (e.getSource() == equBtn) {
            num2 = Double.parseDouble(display.getText());
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
            }
            display.setText(String.valueOf(result));
            num1 = result; // Allow chaining calculations
        }

        if (e.getSource() == clrBtn) {
            display.setText("");
        }

        if (e.getSource() == delBtn) {
            String string = display.getText();
            display.setText("");
            for (int i = 0; i < string.length() - 1; i++) {
                display.setText(display.getText() + string.charAt(i));
            }
        }
    }
}