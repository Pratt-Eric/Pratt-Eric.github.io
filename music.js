localStorage.setItem("1", "https://www.youtube.com/embed/5TD7mR-xDIo");
localStorage.setItem("2", "https://www.youtube.com/embed/wU3jq18nkOw");
localStorage.setItem("3", "https://www.youtube.com/embed/iCQ8wHYudiQ");
localStorage.setItem("4", "https://www.youtube.com/embed/6gz4HY6NE8Q");
localStorage.setItem("5", "https://www.youtube.com/embed/3xDP0sjzSVg");
localStorage.setItem("https://www.youtube.com/embed/5TD7mR-xDIo", "1");
localStorage.setItem("https://www.youtube.com/embed/wU3jq18nkOw", "2");
localStorage.setItem("https://www.youtube.com/embed/iCQ8wHYudiQ", "3");
localStorage.setItem("https://www.youtube.com/embed/6gz4HY6NE8Q", "4");
localStorage.setItem("https://www.youtube.com/embed/3xDP0sjzSVg", "5");
localStorage.setItem("media/music/I-Know-That-My-Redeemer-Lives.mp3", "1");
localStorage.setItem("media/music/I-Believe-In-Christ.mp3", "2");
localStorage.setItem("media/music/Im-Trying-to-Be-Like-Jesus.mp3", "3");
localStorage.setItem("media/music/Tragedy.mp3", "4");
localStorage.setItem("media/music/Tragedy-Part-2.mp3", "5");
localStorage.setItem("1text", "I Know That My Redeemer Lives");
localStorage.setItem("2text", "I Believe In Christ");
localStorage.setItem("3text", "I'm Trying to Be Like Jesus");
localStorage.setItem("4text", "Tragedy");
localStorage.setItem("5text", "Tragedy Pt 2");
localStorage.setItem("audio", "<div id=\"audio\"><div id=\"main-header\">I Know That My Redeemer Lives</div><audio controls><source id=\"source\" src=\"media/music/I-Know-That-My-Redeemer-Lives.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></div>");
localStorage.setItem("video", "<div id=\"video\"><div id=\"main-header\">I Know That My Redeemer Lives</div><div class=\"main-media\"><iframe id=\"source\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5TD7mR-xDIo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div></div>");
localStorage.setItem("title", undefined);
localStorage.setItem("source", undefined);
function selectMedia(id){
  var source = document.getElementById("source");
  source.setAttribute("src", localStorage.getItem(id));
  var header = document.getElementById("main-header");
  header.innerText = localStorage.getItem(id + "text");
  localStorage.setItem("title", document.getElementById(id).innerText);
  localStorage.setItem("source", localStorage.getItem(id));
  var audio = document.getElementById("audio");
  if(audio !== undefined && audio !== null){
    document.getElementsByTagName("audio")[0].load();
    localStorage.setItem("audio", audio.outerHTML);
    //need to select the correct menu item.
  }else{
    var video = document.getElementById("video");
    if(video !== undefined){
      localStorage.setItem("video", video.outerHTML);
    }
  }
  changeSelectedTextColor(id);
}
function changeSelectedTextColor(id){
  var list = document.getElementById("music-list");
  var listItems = list.childNodes;
  for(var i = 0; i < listItems.length; i++){
    if(listItems[i].childNodes !== undefined && listItems[i].childNodes[0] !== undefined && listItems[i].childNodes[0].classList !== undefined){
      listItems[i].childNodes[0].classList.remove("active");
      listItems[i].childNodes[0].classList.remove("selected");
    }
  }
  document.getElementById(id).classList.add("active");
  document.getElementById(id).classList.add("selected");
}
function showMedia(medium){
  var opposing;
  if(medium === "video"){
    opposing = "audio";
  }else if(medium === "audio"){
    opposing = "video";
  }
  var element = document.getElementById(opposing);
  if(element !== undefined && element !== null){ //This would be undefined if the user selected the same media that's always showing.
    var str = element.outerHTML;
    localStorage.setItem(opposing, str);
    var media = document.getElementById("media");
    var mediaStr = localStorage.getItem(medium);
    media.innerHTML = mediaStr;
    setLocalStorageValues(medium);
    selectMedia(localStorage.getItem(document.getElementById("source").getAttribute("src")));
  }
}
function setLocalStorageValues(medium){
  if(medium === "audio"){
    localStorage.setItem("1", "media/music/I-Know-That-My-Redeemer-Lives.mp3");
    localStorage.setItem("2", "media/music/I-Believe-In-Christ.mp3");
    localStorage.setItem("3", "media/music/Im-Trying-to-Be-Like-Jesus.mp3");
    localStorage.setItem("4", "media/music/Tragedy.mp3");
    localStorage.setItem("5", "media/music/Tragedy-Part-2.mp3");
  }else if(medium === "video"){
    localStorage.setItem("1", "https://www.youtube.com/embed/5TD7mR-xDIo");
    localStorage.setItem("2", "https://www.youtube.com/embed/wU3jq18nkOw");
    localStorage.setItem("3", "https://www.youtube.com/embed/iCQ8wHYudiQ");
    localStorage.setItem("4", "https://www.youtube.com/embed/6gz4HY6NE8Q");
    localStorage.setItem("5", "https://www.youtube.com/embed/3xDP0sjzSVg");
  }
  localStorage.setItem("title", undefined);
  localStorage.setItem("source", undefined);
}
