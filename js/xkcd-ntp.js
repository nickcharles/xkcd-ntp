// Wait for request and then populate title and image
function setup () {
  console.log(this.response);
  document.getElementById("comicTitle").innerHTML=this.response.title;
  document.getElementById("comic").src=this.response.img;
  document.getElementById("comic").alt=this.response.title;
  document.getElementById("comic").title=this.response.alt;

  curComic = this.response.num;
  recComic = this.response.num;
}

function reqListener () {
  console.log(this.response);
  document.getElementById("comicTitle").innerHTML=this.response.title;
  document.getElementById("comic").src=this.response.img;
  document.getElementById("comic").alt=this.response.title;
  document.getElementById("comic").title=this.response.alt;

  curComic = this.response.num;
}

function getFirst() {
  var fReq = new XMLHttpRequest();
  fReq.responseType = "json";
  fReq.onload = reqListener;
  fReq.open("GET", "http://xkcd.com/1/info.0.json", true);
  fReq.send();
}

function getLast() {
  var nReq = new XMLHttpRequest();
  nReq.responseType = "json";
  nReq.onload = reqListener;
  nReq.open("GET", "http://xkcd.com/" + recComic + "/info.0.json", true);
  nReq.send();
}

//Create new XMLHttpRequest object and get new comic information
var oReq = new XMLHttpRequest();
var recComic = null;
var curComic = null;

oReq.responseType = "json";
oReq.onload = setup;
oReq.open("GET", "http://xkcd.com/info.0.json", true);
oReq.send();

var fl = document.getElementById("first");
fl.addEventListener("click", getFirst, false);
// var pl = document.getElementById("prev");
// pl.addEventListener("click", getPrev, false);
// var rl = document.getElementById("random");
// rl.addEventListener("click", getRandom, false);
// var nl = document.getElementById("next");
// nl.addEventListener("click", getNext, false);
var ll = document.getElementById("last");
ll.addEventListener("click", getLast, false);