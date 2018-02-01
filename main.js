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
