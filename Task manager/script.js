// Routine manager
var arr_time_comp = [], arr_date_comp = [], arr_comp = [], arr_day_comp = [];
var arr_time_temp = [], arr_date_temp= [], arr_temp = [];

// let task_name, task_date, task_time;
// var task_name = document.getElementById("Name").value;
// var task_time = document.getElementById("time").value;
// var task_date = document.getElementById("date").value;

/*function name() {
  task_name = document.getElementById("name").value;
}

function time() {
  task_time = document.getElementById("time").value;
}

function date() {
   task_date = document.getElementById("date").value;
}*/

function check() {
  var task_name = document.getElementById("Name").value;
  var task_time = document.getElementById("time").value;
  var task_date = document.getElementById("date").value;
  var tick = document.getElementById("priority");
  if(tick.checked) {
  arr_comp.push(task_name);
  arr_date_comp.push(task_date);
  arr_time_comp.push(task_time);
  }
  else {
    arr_temp.push(task_name);
    arr_date_temp.push(task_date);
    arr_time_temp.push(task_time);
  }
}

function dayGet() {
  check();
  for(var i=0; i<arr_date_comp.length;i++) {
    arr_day_comp.push(parseInt(arr_date_comp[i].split("-")[2]));
  }
}

// main logic of the function
function sort() {
  dayGet();
  size = arr_day_comp.length;  
  let temp1, temp2;
  for(var x=0;x<size;x++) {
    for(var y=0;y<size-x-1;y++) {
      if(arr_day_comp[y] > arr_day_comp[y+1]) {
        temp1 = arr_day_comp[y];
        arr_day_comp[y] = arr_day_comp[y+1];
        arr_day_comp[y+1] = temp1;

        temp2 = arr_time_comp[y];
        arr_time_comp[y] = arr_time_comp[y+1];
        arr_time_comp[y+1] = temp2;
      }
    }
  }
  return arr_day_comp, arr_time_comp;
}

function display() {
  s = sort();
  console.log(s);
}

function add_task() {
  //name();
  //time();
  //date();
  check();
  var task_name = document.getElementById("Name").value;
  var task_time = document.getElementById("time").value;
  var task_date = document.getElementById("date").value;
  console.log("comp. tasks: ",arr_comp);
  // console.log("temp. tasks: ", arr_temp);
  console.log("comp. dates: ", arr_date_comp);
  // console.log("temp. dates: ", arr_date_temp);
  console.log("comp. time: ",arr_time_comp);
  // console.log("temp. time: ",arr_time_temp);
  // console.log("sorter: ",sort(arr_day_comp, arr_time_comp));

  var t = document.getElementById("tbl");
  var r = t.insertRow();
  var cell1 = r.insertCell();
  var cell2 = r.insertCell();
  var cell3 = r.insertCell();
  cell1.innerHTML = task_name;
  cell2.innerHTML = task_date;
  cell3.innerHTML = task_time;
}




// Expense manager
var income, savings, price, quantity;

function store() {
  income = parseInt(document.getElementById("income").value);
  savings = parseInt(document.getElementById("savings").value);
  console.log("Amount: ", income + savings);
}

function table2() {
  if(income>0) {
    price = document.getElementById("price").value;
    quantity = document.getElementById("quant").value;
    income -= (price*quantity);
    var t2 = document.getElementById("tbl2");
    var r2 = t2.insertRow();
    var data1 = r2.insertCell();
    var data2 = r2.insertCell();
    data1.innerHTML = income;
    data2.innerHTML = savings;  
  }
  else if(savings>0 && income==0) {
    price = document.getElementById("price").value;
    quantity = document.getElementById("quant").value;      
    savings -= (price*quantity);
    var t2 = document.getElementById("tbl2");
    var r2 = t2.insertRow();
    var data1 = r2.insertCell();
    var data2 = r2.insertCell();
    data1.innerHTML = income;
    data2.innerHTML = savings;
  }
  else {
    alert("Money limit gone");
  }
}