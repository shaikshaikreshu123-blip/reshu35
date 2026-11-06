//public class Conditionalstatements{
	
//	public static void main(String[] args){
		
//		int i = 10;
//		if(i<0){
			
//			System.out.println("The given number is Negative");
//		}
//		if(i>0){

			
//			 System.out.println("The given number is Positive");
//		}
//	}
	
//}      IF CONDITION........................
//===================================================================

//IF-ELSE CONDITION:
 import java.util.Scanner;
public class Conditionalstatements{
	
 public static void main(String[] args){
	 Scanner scanner=new Scanner(System.in);
	 System.out.println("What is your online assessment");
	 String examStatus = scanner.nextLine();
		String examStatus ="pass";
	    if (examStatus =="pass"){
			 System.out.println("please wait for fuirther round");
			 String round1Status ="pass";
			 if(round1Status == "pass"){
		      System.out.println("you have cleared the 2nd round");
			   String round2Status ="Fail";
			 if(round2Status == "pass"){
		      System.out.println("you have cleared the 2nd  round");
			 } 
		else{

			
			 System.out.println("you can goto HR interview");
		}
	}
		
		
	else{
    System.out.println("You can goyo home");
	}
		}
		else{
			System.out.println("you can go home");
		
}		
 }
}
		
