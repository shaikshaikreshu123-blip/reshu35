//console.log("hello");
//console.log(window);
//console.dir(document.body.childNodes);
//console.dir(document.body.childNodes[1]);
//document.body.childNodes[3].innerText="resh";
//console.dir(document.body);

//MYID (selecting with id)
//_________________________

/*let heading=document.getElementById("heading");//h1
console.dir(heading);*/
/*let button=document.getElementById("myID");//h1
console.dir(button);*/


//MYCLASS (selecting with Class)
//______________________________________

/*let headings = document.getElementsByClassName("myclass");//h1
console.dir(headings);
console.log(headings);*/

//TAG NAME (selecting with Tag Name)
//____________________________________________________

  /*let paras = document.getElementsByTagName("p");
  console.log(paras);*/

  //QUER SELECTOR //returns 1st element
  //_____________________________________________
  //let elements=document.querySelector("P");//1st elemnt
  //console.dir(elements);
  /* let firstEl=document.querySelector("P");//1st elemnt
  console.dir(firstEl);

  let allEl=document.querySelectorAll("P");//all elemnt
  console.dir(allEl);*/



  //PROPERTIES
  //_______________________________________
  //<----TagName---->
  /*let firstEl=document.querySelector("p");//1st elemnt
   console.dir(firstEl);            //search th e chrome(DOM first child)*/

  //<-----innerText----->
  /*let div=document.querySelector("div");
console.log(div);*/

  //<------innerHTML---->
   // let heading =document.querySelector("h1");
    
  //<------textContent---->
 //console.dir(document.body.firstChild);

 //PRACTICE
 //___________________________
 //create h2 heading element ,append from apna college students

  /*let h2=document.querySelector("h2");
  console.log(h2.innerText);
  h2.innerText = h2.innerText +"from Apna College Student";*/

  //2nd ....boxes
  /*let divs = document.querySelectorAll(".box");
  for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
  }
  divs[0].innerText = "new unique value 1";
  divs[1].innerText = "new unique value 1";
  divs[2].innerText = "new unique value 1";*/

  //ATTRIBUTES
 // _________________________________
 //.getAttribute(attr)

 /*let para=document.querySelector("p");
 console.log(para.setAttribute("class","newClass"));*/

 /*let div= document.querySelector("div");
 /*console.log(div);
 let id = div.getAttribute("id");
 console.log(id);
 let name = div.getAttribute("name");
 console.log(name);*/
 //<!--style-->
 /*div.style.backgroundColor="yellow";
 div.style.visibility = "hidden";
 div.style.fontSize = "26px";
 div.innerText ="Hello!";
 div.style.fontSize = "26px";
 div.innerText ="Hello";*/

 //InSERT ELemnet

 /*let newBtn = document.createElement("button");
 newBtn.innerText = "click me";
 console.group(newBtn);
 let p = document.querySelector("p");
 p.append(newBtn);
 //div.prepend(newBtn);
 //div.before(newBtn);
 //div.after(newBtn);*/

 /*let newHeading = document.createElement("h1");
  newHeading.innerHTML = "<i>Hi, I am  new!</i>";

  document.querySelector("body").prepend(newHeading);
  let para = document.querySelector("p");
  para.remove();
 newHeading.remove();*/
//qs1
 /*let newBtn = document.createElement("button");
 newBtn.innerText = "click Me!";
 newBtn.style.color ="white";
 newBtn.style.backgroundColor="red";
 document.querySelector("body").prepend(newBtn);
//qs2

let para  = document.querySelector("p");*/
