package com.careerit;

import java.util.Scanner;

public class IfEvenorOdd {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number");
        int n=sc.nextInt();
        if(n%2==0){
            System.out.println("Given number is Even");
        }
        else{
            System.out.println("Given number is Odd");
        }
    }
}
