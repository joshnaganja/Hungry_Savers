const a=JSON.parse(localStorage.getItem("main"));
console.log(a);
function sidebar()
{
   var a= document.getElementById("list");
   a.style="width:45%";
}
function closebar()
{
   var a= document.getElementById("list");
   a.style="width:0%";
   
}
function firstfunction()
{
   window.location.href = "./iship.html";
}
function secondfunction()
{
   const a=JSON.parse(localStorage.getItem("main"));
   const b=JSON.parse(localStorage.getItem("user"));
   const c=b[a];
   console.log(c)
   if(c["bool"]=="1")
   {
      // alert("donar")
   window.location.href = "./profile_main.html";
   }
   else
   {
      // alert("receiver");
   window.location.href = "./profile_receiver.html";
   }
}
function team()
{
   window.location.href="./teams.html";
}

function come()
{
   var a= document.getElementById("loginlist");
   a.style="display:block";
}
function leav()
{
   var a= document.getElementById("loginlist");
   a.style="display:none";
}