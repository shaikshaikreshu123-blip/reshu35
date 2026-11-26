package com.careerit;

/*public class While {
    public static void main(String[] args) {
        int i =1;
        while(i<100){
            System.out.println(i);
           i++;
        }
      do{
             System.out.println(i);
             i++;
        }
        while(i<=100);
    }

}*/

//Print 200 and 500 even numberes
import java.util.Scanner;
/*public class While {
    public static void main(String[] args) {

        int i=200;
        while(i<=500){
            if(i%2==0){
                System.out.print(i);
            }
            i++;
        }
    }
}*/

/*public class While {
    public static void main(String[] args) {

        int i=150;
        while(i<=200){
            if (i%7==0){
                System.out.println(i);
            }
            i++;
        }
    }
}
*/

public class While {
        public static void main(String[] args) {

            int i = 2;

            while (i <= 150) {
                int count = 0;
                int j = 50;

                while (j <= i) {
                    if (i % j == 0) {
                        count++;
                    }
                    j++;
                }

                if (count == 2) {
                    System.out.println(i);
                }

                i++;
            }
        }
    }



