var students = [];

function Student(first, last, dob, id){
  this.firstName = first;
  this.lastName = last;
  this.dob = dob;
  this.studentid = id;
}

function createStudent(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var id = document.getElementById("id").value;

  var newStudent = new Student(firstName, lastName, dob, id);
  students.push(newStudent);

  var firstName = document.getElementById("firstName").value = '';
  var lastName = document.getElementById("lastName").value = '';
  var dob = document.getElementById("dob").value = '';
  var id = document.getElementById("id").value = '';
  updateStudentList();
}

function updateStudentList(){
  var studentLabel = document.getElementById("currStudents");
  studentLabel.innerText = "Current Students";
  var currStudents = document.getElementById("studentInfo");
  while(currStudents.firstChild){
    currStudents.removeChild(currStudents.firstChild);
  }
  var headerTr = document.createElement("tr");
  var headerTd = document.createElement("td");
  headerTd.innerText = "Student Id";
  headerTd.style.minWidth = "100px";
  headerTd.style.borderBottom = "1px solid black";
  headerTr.appendChild(headerTd);
  headerTd = document.createElement("td");
  headerTd.innerText = "First Name";
  headerTd.style.minWidth = "200px";
  headerTd.style.borderBottom = "1px solid black";
  headerTr.appendChild(headerTd);
  headerTd = document.createElement("td");
  headerTd.innerText = "Last Name";
  headerTd.style.minWidth = "200px";
  headerTd.style.borderBottom = "1px solid black";
  headerTr.appendChild(headerTd);
  headerTd = document.createElement("td");
  headerTd.innerText = "Date of Birth";
  headerTd.style.borderBottom = "1px solid black";
  headerTr.appendChild(headerTd);
  currStudents.appendChild(headerTr);
  for(var i = 0; i < students.length; i++){
    var student = students[i];
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = student.studentid;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = student.firstName;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = student.lastName;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = student.dob;
    tr.appendChild(td);
    currStudents.appendChild(tr);
  }
}
var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Helvetica', 'Times New Roman'];
var fontElement = document.getElementById("fonts");
var fontHTML = fontElement.innerHTML;
fonts.forEach(function(font){
  var option = document.createElement("option");
  option.value = font;
  option.style.fontFamily = font;
  option.innerText = font;
  fontElement.appendChild(option);
});
var sizeElement = document.getElementById("sizes");
var multiplier1 = 7;
var multiplier2 = 0;
for(var i = 0; i < 13; i++){
	var fontValue = 0;
  var option = document.createElement("option");
	if(i === 2){
  	fontValue = (i + 1) + 8;
  }
  if(i < 9){
  	fontValue = (i * 2) + 8;
  }else{
    fontValue = (4 * (multiplier1 + multiplier2) + 8);
    multiplier1 += multiplier2;
    if(multiplier2 === 0){
    	multiplier2 = 3;
    }else{
    	multiplier2 *= 2;
    }
  }
  option.value = fontValue;
  option.style.fontSize = fontValue + 'pt';
  option.innerText = fontValue;
  sizeElement.appendChild(option);
}
function updateOutput(){
	var output = document.getElementById("output");
 	var fonts = document.getElementById("fonts");
  var sizes = document.getElementById("sizes");
  var fontVal = fonts.value;
  var sizeVal = sizes.value;
  var str = '';
  if(fontVal !== 'Font'){
  	str += 'Font chosen is ' + fontVal + '. ';
    output.style.fontFamily = fontVal;
  }
  if(sizeVal !== 'Size'){
  	str += 'Size chosen is ' + sizeVal + '. ';
    output.style.fontSize = sizeVal + 'pt';
  }
  output.innerText = str;
}
