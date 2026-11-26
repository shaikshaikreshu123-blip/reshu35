package com.careerit;

public class Largestof3Numbers {
    public static void main(String[] args) {
        int a=10;
        int b=60;
        int c=55;
        int d=100;

        if(a>b && a>c && a>d ) {
            System.out.println("The largest number is " + a);
        }
        else if(b>a && b>c && b>d ) {
            System.out.println("The largest number is " + b);
        }
        else if(c>a && c>b && c>d ) {
            System.out.println("The largest number is " + c);
        }
        else if(d>a && d>b && d>c) {
            System.out.println("The largest number is " + d);
        }

        else {
            System.out.println("two or more numbers are equal");
        }

        }
    }

