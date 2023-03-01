const hourE1=document.getElementById("hours");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");  
const ampmE1=document.getElementById("am-pm");

setInterval(updateClock,1000)
function updateClock(){
   let h=new Date().getHours();
   let m=new Date().getMinutes();
   let s=new Date().getSeconds();
   let ampm = h >= 12 ? 'PM' : 'AM';

   hourE1.innerText=h
   minuteE1.innerText=m
   secondE1.innerText=s
   ampmE1.innerText=ampm
}


