/*let btn1=document.querySelector("#btn1");

btn1.onclick = () =>{
   console.log("btn1 was clicked");
   let a=25;
   a++;
   console.log(a);//26
};


let div = document.querySelector("div");
div.onmouseover = () =>{
   console.log("you are inside div");
};*/
//EVENT HANDLING

/*btn1.onclick = () =>{
   console.log("HANDLER");
   let a=25;
   a++;
   console.log(a);//26
};

btn1.onclick=()=>{
   console.log("HANDLER2");
};

let div = document.querySelector("div");
div.onmouseover = () =>{
   console.log("you are inside div");
};*/

//EVENT OBJECT

/*let btn1=document.querySelector("#btn1");

    btn1.onclick = (evt) =>{
     console.log(evt);
      console.log(evt);
      console.log(evt.type);
      console.log(evt.target);
      console.log(evt.clientx,evt.clienty);
 
   };

   let div = document.querySelector("div");
div.onmouseover = (evt) =>{
   console.log(evt);
   console.log(evt.type);
      console.log(evt.target);
      console.log(evt.clientx,evt.clienty);
 
};*/

//EVENT LISTENERS
//btn1.addEventListener("click",(evt)=>{
   // console.log("button1 was clicked");
    //console.log(evt);
   // console.log(evt.type);
//});
//let btn1=document.querySelector("#btn1");

/*btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked-handler1");
});
//btn1.addEventListener("click",()=>{
   const handler2=()=>{
    console.log("button1 was clicked-handler2");
};

//btn1.addEventListener("click",()=>{
   const handler3=()=>{
    console.log("button1 was clicked-handler3");
};

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler4");
});
//btn1.removeEventListener("click",()=>{
  // console.log("button1 was clicked-handler4");
//});
btn1.removeEventListener("click",handler3);
btn1.removeEventListener("click",handler2);*/

//PRACTICE
//togglebutton chNGES THE SCREEN DARK=MODE LIGHT MODE

//1.DARK
//2.LIGHT

let modeBtn = document.querySelector("#mode");
let body=document.querySelector("body");
let currMode ="light";//dark

modeBtn.addEventListener("click",()=>{
if(currMode==="light")
   {
   currMode="dark";
   body.classList.add("dark");
   body.classList.remove("light");

   
   }
else{
   currMode="light";
   body.classList.add("light");
    
 }
console.log(currMode);
});



