package com.careerit;

import java.util.Random;

public class Staticnonstatic {
    int number;
    public static void main(String[] args) {
        Staticnonstatic staticnonstatic = new Staticnonstatic();
        staticnonstatic.number = new Random().nextInt();


        System.out.println(staticnonstatic.number);


    }
}
