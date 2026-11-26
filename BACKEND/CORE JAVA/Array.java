package com.careerit;

/*public class Array {
    public static void main(String[] args) {

       int[] j=new int[10];
       j[4]=5;
       j[1]=6;
       j[2]=7;
       j[3]=8;
       j[5]=9;
      // System.out.println(j[5]);

  //      for(int i=0; i<j.length;i++){
    //        System.out.println(j[i]);
      //  }
        int sum=j[0]+j[1]+j[2];
        System.out.println(sum);

        int i=0;
        while(i<j.length){
            System.out.println(i);
            i++;
        }
    }
}
*/
/*public class Array {
    public static void main(String[] args) {
        int[]j=new int[5];
        j[0]=2;
        j[1]=5;
        j[2]=1;
        j[3]=9;
        j[4]=6;
      // for(int i=0;i<j.length;i++){
        //   System.out.println(j[1]);

       /** int i=0;
      *  while(i<j.length){
            System.out.println(i);
            i++;
        }
       int sum=j[0]+j[1]+j[2]+j[3]+j[4];
       System.out.println(sum);
       }
    }*/
/*import java.util.Arrays;

public class Array {

        public static void main(String[] args) {

            String[] arr1 = {"chai", "coffee"};
            String[] arr2 = {"milk", "water", "coke"};

            String[] result = new String[arr1.length + arr2.length];

            int index = 0;

            for (int i = 0; i < arr1.length; i++) {
                result[index++] = arr1[i];
            }

            for (int i = 0; i < arr2.length; i++) {
                result[index++] = arr2[i];
            }

            System.out.println(Arrays.toString(result));
        }
    }*/


public class Array {
    public static void main(String[] args) {
       boolean[] arr = {true,false,false,true,false,true};
        for(int j=0;j<arr.length;j++){
            System.out.print(arr[j]+" ");
        }
    }
}





