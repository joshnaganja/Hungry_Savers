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
function flip_rotate()
{
   var a=document.getElementsByClassName("newone")[0];
   a.style.transform="rotateY(180deg)"
}
function flip_rotate1()
{
   var a=document.getElementsByClassName("newone")[1];
   a.style.transform="rotateY(180deg)"
}
function reverse()
{
   var a=document.getElementsByClassName("newone")[0];
   a.style.transform="rotateY(0deg)";
}
function reverse1()
{
   var a=document.getElementsByClassName("newone")[1];
   a.style.transform="rotateY(0deg)";
}
function loginfunction()
{
   window.location.href = "./login.html";
}
function register()
{
   window.location.href="./reg.html";
}
function register2()
{
   window.location.href = "./organization.html";
}
function team()
{
   window.location.href="./teams.html";
}