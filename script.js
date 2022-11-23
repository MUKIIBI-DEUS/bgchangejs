let backg=document.querySelector("body");
let backgArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];
let changeB=backgArray[Math.floor(Math.random()*11)];
let final="url"+"("+"'"+changeB+"'"+")";

backg.style.background=final;
backg.style.backgroundAttachment="fixed";
backg.style.backgroundSize="cover";
backg.style.backgroundPosition="center";
// // alert(final);
// console.log(backgArray.length);