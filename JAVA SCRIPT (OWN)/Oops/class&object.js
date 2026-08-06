/*const student={
   fullName : "sharada khapra",
   marks:94.4,
   printMarks:function(){
      console.log("marks=",this.marks);
   },
};*/


/*const employee ={
   calTax(){
      console.log("tax rate is 10%");
   },
   /*caltax2:function(){
      console.log("tax rate is 10%");
   }
}; */

/*const reshmashaik={
   salary:5000,
   caltax(){
      console.log("tax rate is 20%");
   },
};

/*const subhanishaik2={
   salary:5000
};

const moulalishaik3={
   salary:5000
};

const haseenashaik4={
   salary:5000
};

reshmashaik.__proto__=employee;*/
/*subhanishaik2.__proto__=employee;
moulalishaik3.__proto__=employee;*/

//CLASSS
//______________________________
//ex-1
/*class student{
   constructor(school,milage){
      console.log("creating new objects");
      this.school=school;
      this.milage=milage;
   }
   notebook(){
      console.log("notebook");
   }
   pen(){
      console.log("pen");
   }
   //setSchool(school){
   //   this.school=school;
   //}
}
let teacher =new student("ardhaveedu",10);//constructor
console.log(teacher);
//teacher.setSchool("teacher");
let lexus= new student("lexus",12);
console.log(lexus);
//lexus.setSchool("lexus");*/


/*class john{
   friend(){
      console.log("friend");
   }
   resh(){
      console.log("resh");
   }
   setFriend(friend){
      this.friendName=friend;
   }

}
let couples=new john();
couples.setFriend("john");
*/

//inheritance
//_____________________
/*class Parent{
   hello(){
      console.log("hello");
   }
}
class Child extends Parent{
   
}
let obj =new Child();*/


/*class Person{
   constructor(){
      this.species ="how sspecies";
   }
   eat(){
      console.log("eat");
   }
   sleep(){
      console.log("sleep");
   }
   work(){
      console.log("do nothing");
   }
}

class Engineer extends Person{ //constructor
   work()
   {
      console.log("solve problems,build something");
   }
}
//let shaaradaObj=new Engineer();

class Doctor extends Person{ //constructor
   work()
   {
      console.log("treat patience");
   }
}
let shradaObj=new Engineer();*/

//SUPER KEYWORD
//__________________________________
/*class Person{
   constructor(name){
    //  console.log("enter paren constructor");
      this.species ="how sspecies";
      this.name=name;
   }
   eat(){
      console.log("eat");
   }
   
}

class Engineer extends Person{ //constructor
   constructor(name){
     // console.log("enter child constructor");
      super();//to invoke parent class constructor
     // this.branch=branch;
    //  console.log("exit child constructor");
   }
   work(){
     super.eat();
      console.log("solve problems,build something");
   }
}
let engObj=new Engineer("sharadaa");*/

//LETS PRACTICE
//____________________________
  /*let DATA="secret information";
  class User{
    constructor(name,email){
      this.name=name;
      this.name=email;
    }
    viewData(){
      console.log("data =",DATA);
    }
}
 class Admin extends User{
   constructor(name,email){
      super(name,email);

   }
   editData(){
      DATA ="some new value";
   }
}
let student1=new User("sharada","abc@gmail.com");
let student2=new User("aman","aman@gmail.com");

let teacher1=new User("Dean","dean@college.com");
let admin1=new Admin("admin","admin@college.com");*/

//ERROR HANDLING
//___________________________
/*let a=5;
let b=10;
console.log("a=",a);
console.log("a=",a);
console.log("a+b =",a+b);
try{
   console.log("a+b=",a+c);//error
}catch(err){
   console.log(err);
}
console.log("a=",a);
console.log("a=",a);
console.log("a=",a);
console.log("a=",a);
console.log("a=",a);*/

//CALLBACK HELL


