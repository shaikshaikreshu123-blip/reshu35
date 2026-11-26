package com.careerit;

import java.util.Scanner;

public class IfOddStudent {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Student Marks");
        int marks=sc.nextInt();
        if(marks<35) {
            System.out.println("Student is fail");
        }
             else if (marks==35){
                System.out.println("Student is pass");
            }
            else if (marks<70){
                System.out.println("Student is thirdclass");

            }
            else if(marks<=85){
                System.out.println("Student is Second class");
            }
            else if(marks<=100){
                System.out.println("Student is First class");
            }
                else{
                    System.out.println("Student is First class");
            }


        }
    }

