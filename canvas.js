var x = [];
var y = [];
function makeLineActive(){
  var line = document.getElementById("line");
  var circle = document.getElementById("circle");
  var square = document.getElementById("square");
  line.classList.add("active");
  circle.classList.remove("active");
  square.classList.remove("active");
  localStorage.setItem("active", "line");
}
function makeCircleActive(){
  var line = document.getElementById("line");
  var circle = document.getElementById("circle");
  var square = document.getElementById("square");
  line.classList.remove("active");
  circle.classList.add("active");
  square.classList.remove("active");
  localStorage.setItem("active", "circle");
}
function makeSquareActive(){
  var line = document.getElementById("line");
  var circle = document.getElementById("circle");
  var square = document.getElementById("square");
  line.classList.remove("active");
  circle.classList.remove("active");
  square.classList.add("active");
  localStorage.setItem("active", "square");
}
function makeCanvasActive(){
  var canvas = document.getElementById("canvasbtn");
  var video = document.getElementById("videobtn");
  var audio = document.getElementById("audiobtn");
  canvas.classList.add("active");
  video.classList.remove("active");
  audio.classList.remove("active");
  var activecard = localStorage.getItem("activecard");
  var card;
  if(activecard === "video"){
    card = document.getElementById("videocard");
    localStorage.setItem("video", card.outerHTML);
  }else if(activecard === "audio"){
    card = document.getElementById("audiocard");
    localStorage.setItem("audio", card.outerHTML);
  }
  if(activecard === "video" || activecard === "audio"){
    var parent = card.parentElement;
    parent.removeChild(card);
    var canvas = localStorage.getItem("canvas");
    if(canvas !== undefined){
      parent.innerHTML = parent.innerHTML + canvas;
    }
    localStorage.setItem("activecard", "canvas");
    addListener();
  }
}
function makeVideoActive(){
  var canvas = document.getElementById("canvasbtn");
  var video = document.getElementById("videobtn");
  var audio = document.getElementById("audiobtn");
  canvas.classList.remove("active");
  video.classList.add("active");
  audio.classList.remove("active");
  var activecard = localStorage.getItem("activecard");
  var card;
  if(activecard === "canvas"){
    card = document.getElementById("canvascard");
    localStorage.setItem("canvas", card.outerHTML);
  }else if(activecard === "audio"){
    card = document.getElementById("audiocard");
    localStorage.setItem("audio", card.outerHTML);
  }if(activecard === "canvas" || activecard === "audio"){
    var parent = card.parentElement;
    console.log(parent);
    parent.removeChild(card);
    var video = localStorage.getItem("video");
    if(video !== undefined){
      parent.innerHTML = parent.innerHTML + video;
    }
    localStorage.setItem("activecard", "video");
  }
}
function makeAudioActive(){
  var canvas = document.getElementById("canvasbtn");
  var video = document.getElementById("videobtn");
  var audio = document.getElementById("audiobtn");
  canvas.classList.remove("active");
  video.classList.remove("active");
  audio.classList.add("active");
  var activecard = localStorage.getItem("activecard");
  var card;
  if(activecard === "canvas"){
    card = document.getElementById("canvascard");
    localStorage.setItem("canvas", card.outerHTML);
  }else if(activecard === "video"){
    card = document.getElementById("videocard");
    localStorage.setItem("video", card.outerHTML);
  }
  if(activecard === "canvas" || activecard === "video"){
    var parent = card.parentElement;
    parent.removeChild(card);
    var audio = localStorage.getItem("audio");
    if(audio !== undefined){
      parent.innerHTML = parent.innerHTML + audio;
    }
    localStorage.setItem("activecard", "audio");
  }
}
function addListener(){
  document.getElementById('canvas').addEventListener('click', function(event){
    if(x.length === 0){
      x.push(event.clientX);
      y.push(event.clientY);
    }else if(x.length === 1){
      x.push(event.clientX);
      y.push(event.clientY);

      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");

      var x1 = parseInt(x[0]) - 40;
      var x2 = parseInt(x[1]) - 40;
      var y1 = parseInt(y[0]) - 145;
      var y2 = parseInt(y[1]) - 145;

      console.log(x1 + ', ' + x2 + " : " + y1 + ", " + y2);
      var activeBtn = localStorage.getItem("active");
      console.log(activeBtn);

      if(activeBtn === 'line'){
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.stroke();
        console.log("Attempted Line");
      }else if(activeBtn === 'circle'){
        var rad = (x2 - x1) / 2;
        var startX = x1 + rad;
        var startY = y1 + rad;
        context.beginPath();
        context.arc(startX, startY, rad, 0, 2*Math.PI);
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.stroke();
        console.log("Attempted Circle");
      }else if(activeBtn === 'square'){
        context.beginPath();
        context.rect(x1, y1, (x2 - x1), (y2 - y1));
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.stroke();
        console.log("Attempted Square");
      }

      x = [];
      y = [];
    }
  });
}
var videocard = document.getElementById("videocard");
var audiocard = document.getElementById("audiocard");
localStorage.setItem("video", videocard.outerHTML);
localStorage.setItem("audio", audiocard.outerHTML);
var parent = videocard.parentElement;
parent.removeChild(videocard);
parent.removeChild(audiocard);
localStorage.setItem("activecard", "canvas");
localStorage.setItem("active", "line");
addListener();
function instructions(){
  alert("To draw on canvas:\n1. Select the shape you want to make.\n2. Make a click in the starting location.\n3. Make a click in a second location.\n\nDraggin doesn't work\n\nFor Circles, the diameter is calculated based on the difference of the x-axis variables before inserting it.");
}
