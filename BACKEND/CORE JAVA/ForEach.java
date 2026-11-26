package com.careerit;

public class ForEach {
    public static void main(String[] args) {
             //int[] arr ={1,2,3,4,5};
//             for (int i=0;i<arr.length;i= i+1) {
//                 System.out.print(arr[i]+" ");
//             }
        int[][] arr={
                {1,2,3},
                {4},
                {7,9}
        };
        int sum=0;
        int noOfElements=0;
        for(int[] singleDimArray:arr){
            for(int value:singleDimArray){
               sum+=value;
               noOfElements++;

            }
        }
        System.out.println(sum);
        System.out.println(sum/arr.length);

//        int sum=0;
//             for(int value:arr){
//               sum+=value;
//             }
//             System.out.println(sum);
//             System.out.println(sum/arr.length);
    }
}
