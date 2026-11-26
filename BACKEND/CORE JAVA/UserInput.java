package com.careerit;

import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {


      Scanner sc=new Scanner(System.in);
        System.out.println("What is your name");
        String name=sc.next();
        System.out.println("What is your age");
        System.out.print("Your age%s,How are you?\n");
        String status = sc.nextLine();
        System.out.print("What is your height");
        int height=sc.nextInt();
    }
}
