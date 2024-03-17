// let count=0;

// const increasebutton=function(){
//     count= count+1;
//     document.getElementById("countlabel").textContent= count;
// }
// const decreasebutton=function(){
//     count= count-1;
//     document.getElementById("countlabel").textContent= count;
// }
// const resetbutton=function(){
//     count=0;
//     document.getElementById("countlabel").textContent= count;
// }
// document.getElementById("increasebtn").onclick=increasebutton;

const decreaseBtn=document.getElementById("decreasebtn");
const resetBtn=document.getElementById("resetbtn");
const increaseBtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;

increaseBtn.onclick=function(){
  count++;
  
  countlabel.textContent=count;
  countlabel.style.color="green";
}
decreaseBtn.onclick=function(){
  count--;
  countlabel.textContent=count;
  countlabel.style.color="red";
}
resetBtn.onclick=function(){
  count=0;
  countlabel.textContent=count;
  countlabel.style.color="black";
}
