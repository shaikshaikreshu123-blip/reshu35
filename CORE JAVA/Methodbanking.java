public class Methodbanking{
	
	static int currentBalance = 10000;
	public static  void  reshCustomer(){
		System.out.println("hii hello ,resh welcome to the banking application");
	}
	
	 public void deposit (int amount){
		currentBalance = currentBalance + amount;
		System.out.println("Amount is deposited successfully");
    }
	
	public  static void withdrawal(int amount){
		 currentBalance = currentBalance - amount;
		 System.out.println("Amount is withdrawn successfully");

	}
	 public int getCurrentBalance(){
		return currentBalance;
		 
	 }
	
	
	 public static void main(String[] args){
		Methodbanking  methodbanking= new Methodbanking();
		reshCustomer();
		System.out.println("current balance is :"+methodbanking.getCurrentBalance());
		methodbanking.deposit(500);
	    System.out.println("current balance is :"+methodbanking.getCurrentBalance());
		withdrawal(5000);
		 System.out.println("current balance is :"+methodbanking.getCurrentBalance());
		 
	 }
	
}
