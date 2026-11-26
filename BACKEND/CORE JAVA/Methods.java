package com.careerit;

public class Methods {

    // 1. No Arguments and No Return Value
    void addition() {
        int a = 10;
        int b = 20;
        System.out.println("Addition: " + (a + b));
    }

    // 2. Arguments and No Return Value
    void subtraction(int a, int b) {
        System.out.println("Subtraction: " + (a - b));
    }

    // 3. No Arguments and Return Value
    int multiplication() {
        int a = 10;
        int b = 5;
        return a * b;
    }

    // 4. Arguments and Return Value
    int division(int a, int b) {
        return a / b;
    }

    public static void main(String[] args) {

        Methods obj = new Methods();

        obj.addition();

        obj.subtraction(30, 10);

        int result1 = obj.multiplication();
        System.out.println("Multiplication: " + result1);

        int result2 = obj.division(20, 5);
        System.out.println("Division: " + result2);
    }
}