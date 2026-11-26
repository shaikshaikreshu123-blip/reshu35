package com.careerit;

public class Developer extends Admin {
    public void develop() {
        System.out.println("Develop code");
    }
    public static void main(String[] args) {
        Developer obj = new Developer();
        obj.read();
        obj.write();
        obj.manage();
        obj.develop();

    }

}
