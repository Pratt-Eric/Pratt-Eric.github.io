localStorage.setItem("1", "https://www.youtube.com/embed/5TD7mR-xDIo");
localStorage.setItem("2", "https://www.youtube.com/embed/wU3jq18nkOw");
localStorage.setItem("3", "https://www.youtube.com/embed/iCQ8wHYudiQ");
localStorage.setItem("4", "https://www.youtube.com/embed/6gz4HY6NE8Q");
localStorage.setItem("5", "https://www.youtube.com/embed/3xDP0sjzSVg");
function selectVideo(id){
  var frame = document.getElementById("frame");
  frame.setAttribute("src", localStorage.getItem(id));
  changeSelectedTextColor(id);
}
function changeSelectedTextColor(id){
  var list = document.getElementById("music-list");
  var listItems = list.childNodes;
  for(var i = 0; i < listItems.length; i++){
    if(listItems[i].childNodes !== undefined && listItems[i].childNodes[0] !== undefined && listItems[i].childNodes[0].classList !== undefined){
      listItems[i].childNodes[0].classList.remove("active");
    }
  }
  document.getElementById(id).classList.add("active"); 
}
