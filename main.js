var questionsAnswered = [];
var questions = [];

function question(q, correctAnswer){
  this.question = q;
  this.correctAnswer = correctAnswer;
  this.answer = undefined;
}
function answer(a, userAnswer){
  this.a = a;
  this.userAnswer = userAnswer;
}

var polygQuestion = new question("Do Mormons practice polygamy?", false);
questions.push(polygQuestion);

var christianQuestion = new question("Are Mormons Christians?", true);
questions.push(christianQuestion);

var caffeinQuestion = new question("Can Mormons drink caffeinated beverages?", true);
questions.push(caffeinQuestion);

var leaderQuestion = new question("Can women be leaders in the Mormon Church?", true);
questions.push(leaderQuestion);

var bibleQuestion = new question("Do Mormons believe in the Bible?", true);
questions.push(bibleQuestion);

var randomIndex = Math.floor(Math.random() * questions.length);
var currQuestion = questions[randomIndex];

var questionPane = document.getElementById("question-text");
questionPane.innerText = currQuestion.question;

function selectTrue(){
  var trueButton = document.getElementById("btnTrue");
  var falseButton = document.getElementById("btnFalse");
  falseButton.classList.remove("selected");
  trueButton.classList.add("selected");
  currQuestion.answer = true;
}

function selectFalse(){
  var trueButton = document.getElementById("btnTrue");
  var falseButton = document.getElementById("btnFalse");
  trueButton.classList.remove("selected");
  falseButton.classList.add("selected");
  currQuestion.answer = false;
} 

function submitAnswer(){
  if(currQuestion.answer !== undefined){
    questionsAnswered.push(currQuestion);
    questions.splice(randomIndex, 1);
    if(questions.length > 0){
      randomIndex = Math.floor(Math.random() * questions.length);
      currQuestion = questions[randomIndex];

      var trueButton = document.getElementById("btnTrue");
      var falseButton = document.getElementById("btnFalse");
      falseButton.classList.remove("selected");
      trueButton.classList.remove("selected");

      var questionPane = document.getElementById("question-text");
      questionPane.innerText = currQuestion.question;
    }else{
      var parent = document.getElementById("parentWindow");
      var child = document.getElementById("mainWindow");
      var window = document.createElement("div");
      child.classList.add("finished");
      setTimeout(function (){
        parent.removeChild(child);
        parent.appendChild(window);
      }, 200);
      
      window.classList.add("window");
      window.setAttribute("id", "mainWindow");
      
      var results = document.createElement("div");
      results.classList.add("pane");
      results.setAttribute("id", "results");
      var p = document.createElement("p");
      p.innerText = "Your results are as follows:";
      results.appendChild(p);
      
      var table = document.createElement("table");
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.innerText = "Question";
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerText = "Answer";
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerText = "Result";
      tr.appendChild(td);
      table.appendChild(tr);
      buildRowsForTable(table);
      results.appendChild(table);
      window.appendChild(results);
    }
  }
}

function buildRowsForTable(table){
  for(var i = 0; i < questionsAnswered.length; i++){
    var q = questionsAnswered[i];
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = q.question;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = q.correctAnswer;
    tr.appendChild(td);
    td = document.createElement("td");
    if(q.correctAnswer !== q.answer){
      td.innerText = "Incorrect";
    }else{
      td.innerText = "Correct";
    }
    tr.appendChild(td);
    table.appendChild(tr);
  }
}

function wait(mil){
  var start = new Date().getTime();
  var end = start;
  while(end - start < mil){
    end = new Date().getTime();
  }
}