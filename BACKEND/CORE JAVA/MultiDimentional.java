package com.careerit;

public class MultiDimentional {
    public static void main(String[] args) {
       int[][] arr=new int[3][2];
       arr[0][0]=10;
        arr[0][1]=20;
        arr[1][0]=30;
        arr[1][1]=40;
        arr[2][0]=50;
        arr[2][1]=60;
        for(int i=0;i<arr.length;i++){
          //  int[] singleRow=arr[i];
            for(int j=0;j<arr[i].length;j++){
                System.out.print(arr[i][j]+",");

            }
        }

    }
}
/*
public class MultiDimentional {
    public static void main(String[] args) {
        int[][] arr = new int[3][];
        arr[0] = new int[5];
        arr[1] = new int[3];

        arr[1][0] = 25;
        arr[1][1] = 48;
        arr[1][2] = 85;
        arr[1][3] = 81;
        arr[1][4] = 96;

        arr[2][0] = 1;
        arr[2][1] = 2;
        arr[2][2] = 1;


        //int size = 0;

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
            }
        }
    }

*/