const adding_btn = document.getElementById('adding_btn');
var data = {
  name: "",
  contact: "",
  address: "",
  items: []
};

dat =[];


adding_btn.addEventListener('click', function () {
  const foodItem = document.getElementById('in').value;
  const quantity = document.getElementById('quantity').value;

  if (!data.name) {
    data.name = document.getElementById('name').value;
    data.contact = document.getElementById('contact').value;
    data.address = document.getElementById('email').value;
  }

  if (foodItem === "" || quantity === "") {
    alert("Please enter a food item and quantity");
    return;
  }


  data.items.push({foodItem, quantity});

  const itemContainer = document.getElementById('food_lists_container');
  const div_ele = document.createElement('div');
  div_ele.setAttribute('class', 'div_ele');
  itemContainer.appendChild(div_ele);
  itemContainer.style.display = "block";

  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'lst');
  listItem.innerHTML = foodItem +"--"+ quantity+"g" ;
  div_ele.appendChild(listItem);

  const remove_btn = document.createElement('button');
  remove_btn.innerHTML = "Remove";
  remove_btn.setAttribute('class', 'remove_btn');
  div_ele.appendChild(remove_btn);

  remove_btn.addEventListener('click', function() {
    div_ele.remove();
    data.items = data.items.filter(item => !(item.foodItem === foodItem && item.quantity === quantity));
    // localStorage.setItem('data', JSON.stringify(data));
    const itemContainer = document.getElementById('food_lists_container');
    itemContainer.style.display = "none";

    if (data.items.length === 0) {
      const cancel = document.getElementById('cancel');
      cancel.style.display = "none";
      const submit = document.getElementById('submit');
      submit.style.display = "none";
    }
  });

  const cancel = document.getElementById('cancel');
  cancel.style.display = "block";
  const submit = document.getElementById('submit');
  submit.style.display = "block";

  // localStorage.setItem('data', JSON.stringify(data));

  document.getElementById('in').value = "";
  document.getElementById('quantity').value = "";
});

const submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    const itemContainer = document.getElementById('food_lists_container');
    itemContainer.style.display = "none";
  alert('Data submitted: ' + JSON.stringify(data));
  // localStorage.setItem('data', JSON.stringify(data)) || [];

  console.log(data);

  // var datalist = {
  //   name: "",
  //   contact: "",
  //   address: "",
  //   items: []
  // };
  
  const dat=JSON.parse(localStorage.getItem('dat')) || [];
  dat.push(data);
  localStorage.setItem('dat', JSON.stringify(dat));
  // dat.push(data);
  console.log(dat);
});

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', function() {
  resetForm();
});

function resetForm() {
  const itemContainer = document.getElementById('food_lists_container');
  while (itemContainer.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
  }
  const cancel = document.getElementById('cancel');
  cancel.style.display = "none";
  const submit = document.getElementById('submit');
  submit.style.display = "none";
  // localStorage.removeItem('data');
  data.name = "";
  data.contact = "";
  data.address = "";
  data.items = [];
  document.getElementById('name').value = "";
  document.getElementById('contact').value = "";
  document.getElementById('email').value = "";
}