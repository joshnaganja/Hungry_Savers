document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const user = JSON.parse(localStorage.getItem('user')) || {};
  var id=document.getElementById('emailAddress').value;
  const formData = {
    fullName: document.getElementById('fullName').value,
    emailAddress: document.getElementById('emailAddress').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    addressLine1: document.getElementById('addressLine1').value,
    addressLine2: document.getElementById('addressLine2').value,
    country: document.getElementById('country').value,
    city: document.getElementById('city').value,
    region: document.getElementById('region').value,
    postalCode: document.getElementById('postalCode').value,
    bool:'1'
  };
  user[id]=formData;
  localStorage.setItem('user', JSON.stringify(user));
  const a = JSON.parse(localStorage.getItem('main')) || [];
  console.log(a);
  if(a.length>0)
  a.splice(0,a.length);
  a.push(id);
  console.log(a);
  localStorage.setItem("main", JSON.stringify(a));
  console.log(formData);
  console.log(user);
  window.location.href = './password.html';
});