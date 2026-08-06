//const URL="https://cat-fact.herokuapp.com/facts";
const URL="https://www.heroku.com/?utm_source=error-pages&utm_content=no-such-app";
//let promise=fetch(URL);
//console.log(promise);
const factpara = document.qyerySelector("#fact");
const btn=document.querySelector("#btn");


/*const getFacts =async()=>{
   console.log("getting data ......");
   let response = await fetch(URL);
   console.log(response);
   let data =await response.json();
   factpara.innerText=data[1].text;
   //console.log(data);
   
};*/
function getFacts(){
   fetch(URL)
   .then((response)=>{
      return response.json();
   })
   .then((data)=>{
      console.log(data);
      factpara.innerText=data[2].text;
   });

}
btn.addEventListener("click",getFacts);