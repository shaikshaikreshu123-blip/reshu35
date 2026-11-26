package com.careerit;

import java.util.Scanner;

public class mondayif {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Day Name:");
       String day=sc.nextLine();
     switch(day.toLowerCase()){
         case "monday":
         case "sunday":
             case "wednesday":
                 case "thursday":
                     case "friday":
                         System.out.println("Uff,Its a weekday");
                         break;
         case "saturday":
             case "sun":
                 System.out.println("Yayy,Its a weekend");
                 break;
                 default:
                     System.out.println("Invalid DAy");

     }
    }
}
