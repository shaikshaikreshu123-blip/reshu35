package com.careerit;

public class Patterns {
    public static void main(String[] args) {
        for (int i = 4; i <= 10; i++) {
            for (int j = 2; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

