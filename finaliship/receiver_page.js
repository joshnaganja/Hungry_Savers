const data=JSON.parse(localStorage.getItem('dat'));
var donationlist =data;
console.log(donationlist);
var donar = document.getElementById("donor_list");

for (var i = 0; i < donationlist.length; i++) {
    var div=document.createElement("div")
    div.setAttribute("class","block");
    var a = document.createElement("div");
    a.setAttribute("class", "lst_div");
    a.id = i;
    var b = document.createElement("div");
    b.setAttribute("class", "receiver_lst");
    a.appendChild(b);
    for (let key in donationlist[i]) {
        if (key == "address" || key == "name" || key=="contact") {
            var x;
            if (key == "name") {
                x = document.createElement("h1");
                x.innerHTML = donationlist[i][key];
            }
            if (key == "address") {
                x = document.createElement("p");
                x.innerHTML = donationlist[i][key];
            }
            // if (key == "image") {
            //     x = document.createElement("img");
            //     x.src = donationlist[i][key];
            // }
            if(key=="contact")
            {   
                x = document.createElement("div");
                x.setAttribute("class","contact");
                x.innerHTML = donationlist[i][key];
            }
            a.appendChild(x);
        }
    }
    var c = donationlist[i].items;
    // console.log(c);
    var x = document.createElement("img");
    x.src ="./4530158.webp-removebg-preview.png";
    a.appendChild(x);
    for (var key in c) {
        var santhosh=c[key];
        var content="";
        for(let k in santhosh)
        {
            content+=santhosh[k];
        }
        var y = document.createElement("div");
        y.setAttribute("class", "li");
        y.innerHTML = content;
        console.log(y.innerHTML);
        b.appendChild(y);
    }
    let ele = document.createElement('button');
    ele.innerHTML = 'book';
    ele.onclick = () => {
        accepting(a.id);
    }
    div.appendChild(a);
    div.appendChild(ele);
    donar.appendChild(div);
}
function accepting(i) {
    data.splice(i,1);
    var re=document.getElementById(i);
    re.style="background-color:green";
    localStorage.setItem("dat",JSON.stringify(data));
}

