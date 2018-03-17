var ongoingTouches = [];
function startup(){
  var canvas = document.getElementById("canvas");
  canvas.addEventListener("touchstart", handleStart, false);
  canvas.addEventListener("touchend", handleEnd, false);
  canvas.addEventListener("touchcancel", handleCancel, false);
  canvas.addEventListener("touchmove", handleMove, false);
}

function handleStart(event){
  event.preventDefault();
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var touches = event.changedTouches;
  for(var i = 0; i < touches.length; i++){
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    context.beginPath();
    context.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
  }
}

function handleMove(event){
  event.preventDefault();
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var touches = event.changedTouches;
  for(var i = 0; i < touches.length; i++){
    var color = colorForTouch(touches[i]);
    var index = ongoingTouchIndexById(touches[i].identifier);
    if(index >= 0){
      context.beginPath();
      context.moveTo(ongoingTouches[index].pageX, ongoingTouches[index].pageY);
      context.lineTo(touches[i].pageX, touches[i].pageY);
      context.lineWidth = 1;
      context.strokeStyle = color;
      context.stroke();
      ongoingTouches.splice(index, 1, copyTouch(touches[i]));
    }
  }
}

function handleEnd(event){
  event.preventDefault();
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var touches = event.changedTouches;
  for(var i = 0; i < touches.length; i++){
    var color = colorForTouch(touches[i]);
    var index = ongoingTouchIndexById(touches[i].identifier);
    if(index >= 0){
      context.lineWidth = 1;
      context.fillStyle = color;
      context.beginPath();
      context.moveTo(ongoingTouches[index].pageX, ongoingTouches[index].pageY);
      context.lineTo(touches[i].pageX, touches[i].pageY);
      context.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);
      ongoingTouches.splice(index, 1);
    }
  }
}

function handleCancel(event){
  event.preventDefault();
  var touches = event.changedTouches;

  for(var i = 0; i < touches.length; i++){
    var index = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(index, 1);
  }
}

function colorForTouch(touch){
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  var color = "#" + r + g + b;
  return color;
}

function copyTouch(touch){
  return {identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY};
}

function ongoingTouchIndexById(idToFind){
  for(var i = 0; i < ongoingTouches.length; i++){
    var id = ongoingTouches[i].identifier;
    if(id == idToFind){
      return i;
    }
  }
  return -1;
}
