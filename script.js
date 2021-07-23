var arr_time_comp = [], arr_date_comp = [], arr_comp = [], arr_day_comp = [];
var arr_time_temp = [], arr_date_temp= [], arr_temp = [];
var task_name, task_date, task_time;

function name() {
  task_name = document.getElementById("name").value;
}

function time() {
  task_time = document.getElementById("time").value;
}

function date() {
  task_date = document.getElementById("date").value;
}

function check() {
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

function submit() {
  name();
  time();
  date();
  check();
  console.log("comp. tasks: ",arr_comp);
  //console.log("temp. tasks: ", arr_temp);
  console.log("comp. dates: ", arr_date_comp);
  //console.log("temp. dates: ", arr_date_temp);
  console.log("comp. time: ",arr_time_comp);
  //console.log("temp. time: ",arr_time_temp);
  // console.log("sorter: ",sort(arr_day_comp, arr_time_comp));
}
