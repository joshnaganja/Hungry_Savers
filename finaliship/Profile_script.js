const user=JSON.parse(localStorage.getItem('user')); 
const main=JSON.parse(localStorage.getItem('main'));
var a=main[main.length-1];
 var Profile_Details = user[a];
 console.log(Profile_Details);
function profileShowDetails(details) {
    document.querySelector(".profile-name").innerHTML = details.fullName;
    document.querySelector(".profile-location").innerHTML = details.city;
    const inputs = document.querySelectorAll(".profile-mat");
    inputs[0].value = details.fullName;
    inputs[1].value = details.emailAddress;
    inputs[2].value = details.phoneNumber;
    inputs[3].value = details.gender;
    inputs[4].value = details.addressLine1;
    inputs[5].value = details.addressLine2;
    inputs[6].value = details.city;
    inputs[7].value = details.region;
    inputs[8].value = details.country;
    inputs[9].value = details.postalCode;
}

function editProfile() {
    const inputs = document.querySelectorAll(".profile-mat");
    Profile_Details.fullName = inputs[0].value;
    Profile_Details.emailAddress = inputs[1].value;
    Profile_Details.phoneNumber = inputs[2].value;
    Profile_Details.gender = inputs[3].value;
    Profile_Details.addressLine1 = inputs[4].value;
    Profile_Details.addressLine2 = inputs[5].value;
    Profile_Details.city = inputs[6].value;
    Profile_Details.region = inputs[7].value;
    Profile_Details.country = inputs[8].value;
    Profile_Details.postalCode = inputs[9].value;
    Profile_Details.bool="1";

    profileShowDetails(Profile_Details);
}

document.querySelector(".profile-save-changes button").addEventListener("click", () => {
    editProfile();
    alert("Profile updated successfully!");
    user[a]=Profile_Details;
    localStorage.setItem('user',JSON.stringify(user));
});

profileShowDetails(Profile_Details);