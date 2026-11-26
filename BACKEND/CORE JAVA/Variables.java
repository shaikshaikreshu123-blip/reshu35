 //package com.careerit;

public class Variables{

    // Instance Variable
    int age = 22;
    String name = "Reshma";

    // Static Variable
    static String college = "ABC College";

    public static void main(String[] args) {

        // Local Variables
        int marks = 90;
        double salary = 25000.50;
        char grade = 'A';
        boolean isPassed = true;

        // Creating Object
        Variables obj = new Variables();

        // Printing Instance Variables
        System.out.println("Name: " + obj.name);
        System.out.println("Age: " + obj.age);

        // Printing Static Variable
        System.out.println("College: " + Variables.college);

        // Printing Local Variables
        System.out.println("Marks: " + marks);
        System.out.println("Salary: " + salary);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + isPassed);
    }
}