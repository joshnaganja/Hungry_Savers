
const user = JSON.parse(localStorage.getItem('user')) || {};
console.log(user);
function login()
{
    const user = JSON.parse(localStorage.getItem('user')) || {};
    console.log(user);
   var id= document.getElementById("users").value;
   var pass= document.getElementById("pass").value;
   var forget=document.getElementById("invalid");
   var a="password";
   if(id in user)
   {
        console.log(user[id]["password"]);
        if(user[id]["password"]==pass)
        {
            // alert("Login Successful");
            const a=JSON.parse(localStorage.getItem("main")) || [];
            console.log(a);
            if(a.length>0)
            a.splice(0,a.length);
            a.push(id);
            console.log(a);
            localStorage.setItem("main", JSON.stringify(a));
            window.location.href="./full4.html";
            forget.innerHTML="";
        }
        else
        {
            forget.innerHTML="Invalid password";
        }
   }
   else
   {
        forget.innerHTML="Invalid data";
   }
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user')) || {};
    var id= document.getElementById('email-address').value;
    const formData = {
        fullName: document.getElementById('full-name').value,
        emailAddress: document.getElementById('email-address').value,
        phoneNumber: document.getElementById('phone-number').value,
        addressLine1: document.getElementById('address-1').value,
        addressLine2: document.getElementById('address-2').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        bool:"0"

    };
    user[id]=formData;
    localStorage.setItem('user', JSON.stringify(user));
    console.log(formData);
    console.log(user);
    const a=JSON.parse(localStorage.getItem("main")) || [];
    if(a.length>0)
    a.splice(0,a.length);
    a.push(document.getElementById('email-address').value);
    console.log(a);
    localStorage.setItem("main", JSON.stringify(a));
    window.location.href = './password.html';
});