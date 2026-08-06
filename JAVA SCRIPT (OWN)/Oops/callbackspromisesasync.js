//TIMEOUT
//______________________________
/*console.log("Two");
console.log("Three");

/*function hello(){
   console.log("hello");
}
setTimeout(()=>{
   console.log("hello");
},4000);//timeout;

console.log("four");
console.log("five");*/

//CALLBACK
/*function sum(a,b){
   console.log(a+b);
}
function calculator(a,b, sumCallback){
   sumCallback(a,b);
}
calculator(1,2, (a,b) => {
   console.log(a+b);
});*/

//SYNC TIMEOUT
/*const hello=()=>{
   console.log("hello");
}
setTimeout(hello,3000);*/

//CALLBACK HELL
//_______________________________________________________
//nesting
//_________

 /*let age=19;
 if(age>=18){

   if(age>=60){
      console.log("senior");
   }else{
      console.log("middle");
   }
} else{
      console.log("child");
   } */

    /* for(let i=0;i<5;i++){
         let str="";
         for(let j=0;j<5;j++){
            str=str+j;
         }
         console.log(i,str);
      } */
 
  /*ex-2 function getData(dataId,getNextData){ //2s
   //console.log("data",dataId);
   setTimeout(()=>{
      console.log("data",dataId);
      if(getNextData){
         getNextData();
      }
   },2000);
   } 
 getData(1,()=>{
   console.log("getting data2.....");
   getData(2,()=>{
      console.log("getting data3.....");
      getData(3,()=>{
         console.log("getting data4.....");
         getData(4);
      });
   });
 }); // 2s */
 //getData(3); //2s

 //data1
 //data2
 //data3

 //PROMISES
 //_________________________________________________
  
/*let promise = new Promise ((resolve,reject)=>{
  console.log("I am a promise");
  //resolve(success);
   reject("some error occur");
});*/

   /*function getData(dataId,getNextData){ //2s
   return new Promise((resolve,reject) => {
   setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
      reject("error");
      if(getNextData){
         getNextData();
      }
   },5000);
});
 }*/

/*const getPromise=()=>{
    return new Promise((resolve,reject)=>{
      console.log("i am a promise");
    resolve("success");
    //reject(" network error");
   });
};
 
let promise=getPromise();
promise.then((res)=>{
   console.log("promise fulfilled",res);
});
   promise.catch((err)=>{
      console.log("rejected",err);

   });*/



   /*function asyncFunc1(){
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log(" data");
            resolve("success");

         },2000);

         });
      }

      function asyncFunc2(){
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log(" data2");
            resolve("success");

         },6000);

         });
      }

      console.log("fetching data1");
    asyncFunc1.then((res)=>{
    console.log("fetching data2");
    asyncFunc2().then((res)=>{});
   
    });*/

    /*function getData(dataId){ //2s
   return new Promise((resolve,reject) => {
   setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
     // reject("error");
      
   },5000);
});
 }

 //promise chain

 console.log("getting data2.....");
 getData(1)
 .then((res)=>{
  //console.log(res);
 console.log("getting data3.....");
  return getData(2);
  })
  .then((res)=>{
   console.log("getting data4.....");
   return getData(3);
  })
  .then((res)=>{
    console.log("res");
  })
   
  //CALLBACK HELL

  getData(1,()=>{
   console.log("getting data2.....");
   getData(2,()=>{
   console.log("getting data3.....");
   getData(3,()=>{
      console.log("getting data4.....");
      getData(4);
      });
   });
 }); // 2s*/

 //Async-Aawait
 //____________________________________________-
  function getData(dataId){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data",dataId);
        resolve("success");
      },2000);
     } );
  }
  //Async -await
   async function getAllData(){
      console.log("getting data1.....");
      await getData(1);
      console.log("getting data2.....");
      await getData(2);
      console.log("getting daat3.....");
      await getData(3);
      console.log("getting daat4.....");
      await getData(4);
      console.log("getting daat5.....") ;
      await getData(5);
     
   }
   (async function (){
      console.log("getting data1.....");
      await getData(1);
      console.log("getting data2.....");
      await getData(2);
      console.log("getting daat3.....");
      await getData(3);
      console.log("getting daat4.....");
      await getData(4);
      console.log("getting daat5.....") ;
      await getData(5);
     
   })();
/*async function getWeatherData(){
   await api();
   await api();
}
function getData(dataId){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("data",dataId);
         resolve("success");
      },2000);
      });
   }*/

 //promise chain
 /*console.log("getting data2.....");
 getData(1)
 .then((res)=>{
  //console.log(res);
 console.log("getting data3.....");
  return getData(2);
  })
  .then((res)=>{
   console.log("getting data4.....");
   return getData(3);
  })
  .then((res)=>{
    console.log("res");
  });*/

   //CALLBACK HELL

   /*getData(1,()=>{
   console.log("getting data2.....");
   getData(2,()=>{
      console.log("getting data3.....");
      getData(3,()=>{
      console.log("getting data4.....");
         getData(4);
      });
   });
 });*/
 

