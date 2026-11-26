package com.careerit;

public class Strings {
    public static void main(String[] args) {
        String name="Reshma Shaik";
        System.out.println("Name: " + name);
        System.out.println("Length: "+name.length());
        System.out.println("Uppercase: "+name.toUpperCase());
        System.out.println("Lowercase: "+name.toLowerCase());
        System.out.println("Substring: "+name.charAt(2));
        System.out.println("Substring: "+name.contains("Java"));
    }
}
