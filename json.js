var data;
var heirarchy = [];
var vars = '';
function getTheThings(){
  buildJSONVars();
  var httpRequest = new XMLHttpRequest();
  var url = "https://api.publicapis.org/entries?" + vars;
  httpRequest.open("GET", url);
  //httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
      data = JSON.parse(httpRequest.responseText);
      buildButtons();
      buildTree();
      // document.getElementById("tree").innerText = "";
    }
  }
  console.log(vars);
  httpRequest.send(null);
  document.getElementById("tree").innerHTML = "Processing...";
} 

function buildButtons(){
  var buttons = document.getElementById("buttons");
  buttons.innerHTML = "<button class=\"json-btn active\" onclick=\"buildTree()\">Format JSON</button><button class=\"json-btn\" onclick=\"buildJSON()\">Plain JSON</button>";
}

function buildTree(){
  var tree = document.getElementById("tree");
  tree.innerText = "";
  var entries = data.entries;
  for(var i = 0; i < entries.length; i++){
    var obj = entries[i];
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.innerHTML = "<div class=\"json-obj\">" + obj.API + "</div>";
    
    var newUl = document.createElement("ul");
    var newLi = document.createElement("li");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.style.borderBottom = "1px solid black";
    td.innerHTML = "Key";
    tr.style.borderBottom = "1px solid black";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = "Value";
    td.style.borderBottom = "1px solid black";
    tr.appendChild(td);
    tr.style.borderBottom = "1px solid black";
    table.appendChild(tr);
    for(att in obj){
      tr = document.createElement("tr");
      td = document.createElement("td");
      td.innerHTML = att;
      tr.appendChild(td);
      td = document.createElement("td");
      if(obj[att] === undefined || obj[att] === null || obj[att] === ''){
        td.innerHTML = "No";
      }else{
        td.innerHTML = obj[att];
      }
      tr.appendChild(td);
      table.appendChild(tr);
    }
    newLi.appendChild(table);
    newUl.appendChild(newLi);
    li.appendChild(newUl);
    
    ul.appendChild(li);
    tree.appendChild(ul);
  }
}

function parseElement(element){
  //build heirarchy of all parent elements from this point
  buildHeirarchy(element);
  //use that heirarchy to find the right json element to display
  var entries = data.entries;
  var entry;
  for(var j = 0; j < entries.length; j++){
    entry = entries[j];
    var api = entry.API;
  }
}

function buildHeirarchy(element){
  heirarchy = [];
  while(element.parentNode !== undefined){
    heirarchy.push(element.parentNode);
    element = element.parentNode;
  }
}

function buildJSON(){
  var tree = document.getElementById("tree");
  var entries = data.entries;
  tree.innerText = JSON.stringify(entries);
}

function buildJSONVars(){
  var ids = ["title", "description", "auth", "https", "cors", "category"];
  for(var i = 0; i < ids.length; i++){
    var id = ids[i];
    var val = document.getElementById(id).value;
    if(val !== undefined && val !== null && val !== ''){
      if(vars !== ''){
        vars += "&";
      }
      vars += id + "=" + val;
    }
  }
}