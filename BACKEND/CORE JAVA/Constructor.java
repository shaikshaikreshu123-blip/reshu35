package com.careerit;

import java.util.Scanner;

public class Constructor {
    public int i;
    public static  void main(String args[]){
        Constructor cp = new Constructor(3110);
        System.out.println(cp.i);

    }


public Constructor() {
        i=20;

}
public Constructor(int a) {
        i=a;
}
}
