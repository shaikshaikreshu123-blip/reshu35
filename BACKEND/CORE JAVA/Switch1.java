package com.careerit;

import java.util.Scanner;

public class Switch1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number:");
       int num = sc.nextInt();

        switch (num%2) {
            case 0:
                System.out.println("Given number is even");
                break;
            case 1:
            case -1:
                System.out.println("Given number is odd");
                break;


        }

    }
}
