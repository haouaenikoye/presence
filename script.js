var student_name = [];
var student_temp = "";
var blank = "";

function add() {
  student_temp = document.getElementById("name_1").value;
  student_name.push(student_temp);
  document.getElementById("name_1").innerHTML = blank;
  alert("Name Added Successfully");
}

function submit() {
  document.getElementById("display_presence").innerHTML = student_name;
  document.getElementById("sort_btn").style.display = "inline-block";
}

function sort() {
  student_name.sort();
  document.getElementById("display_presence").innerHTML = student_name;
}
