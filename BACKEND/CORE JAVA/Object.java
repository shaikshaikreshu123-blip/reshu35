package com.careerit;

class Object1{

    int i;
    int j;

    // Default Constructor
    Object1() {
        this.i = 1;
        this.j = 1;
    }

    // Parameterized Constructor
    Object1(int i, int j) {
        this.i = i;
        this.j = j;
    }

    // Addition Method
    int add() {
        return i + j;
    }

    // Equals Method
    boolean equals(Object1 obj) {
        return this.i == obj.i && this.j == obj.j;
    }

    public static void main(String[] args) {

        Object1 obj1 = new Object1();

        Object1 obj2 = new Object1(15, 25);

        Object1 obj3 = new Object1(80, 67);

        System.out.println(obj1.add());

        System.out.println(obj2.add());

        System.out.println(obj3.i);

        System.out.println(obj1.equals(obj2));

        System.out.println(obj2.equals(obj3));
    }
}