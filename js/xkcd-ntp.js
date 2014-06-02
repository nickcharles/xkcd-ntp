// Wait for request and then populate title and image

function reqListener() {
  console.log(this.response);
  document.getElementById("comicTitle").innerHTML = this.response.title;
  document.getElementById("comicNumber").innerHTML = this.response.num;
  document.getElementById("comic").src = this.response.img;
  document.getElementById("comic").alt = this.response.title;
  document.getElementById("comic").title = this.response.alt;

  curComic = this.response.num;
}

function setup() {
  console.log(this.response);
  document.getElementById("comicTitle").innerHTML = this.response.title;
  document.getElementById("comicNumber").innerHTML = this.response.num;
  document.getElementById("comic").src = this.response.img;
  document.getElementById("comic").alt = this.response.title;
  document.getElementById("comic").title = this.response.alt;

  curComic = this.response.num;
  recComic = this.response.num;
  
}

function getFirst() {
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", "http://xkcd.com/1/info.0.json", true);
  Req.send();
}

function getPrev() {
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", "http://xkcd.com/" + (curComic-1) + "/info.0.json", true);
  Req.send();
}

function getRandom() {
  randComic = Math.floor((Math.random() * recComic) + 1);
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", "http://xkcd.com/" + randComic + "/info.0.json", true);
  Req.send();
}

function getNext() {
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", "http://xkcd.com/" + (curComic+1) + "/info.0.json", true);
  Req.send();
}

function getLast() {
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", "http://xkcd.com/info.0.json", true);
  Req.send();
}

//Create new XMLHttpRequest object and get new comic information
var oReq = new XMLHttpRequest();
var recComic = null;
var curComic = null;

oReq.responseType = "json";
oReq.onload = setup;
oReq.open("GET", "http://xkcd.com/info.0.json", true);
oReq.send();

var flt = document.getElementById("firstTop");
flt.addEventListener("click", getFirst, false);
var flb = document.getElementById("firstBottom");
flb.addEventListener("click", getFirst, false);
var plt = document.getElementById("prevTop");
plt.addEventListener("click", getPrev, false);
var plb = document.getElementById("prevBottom");
plb.addEventListener("click", getPrev, false);
var rlt = document.getElementById("randomTop");
rlt.addEventListener("click", getRandom, false);
var rlb = document.getElementById("randomBottom");
rlb.addEventListener("click", getRandom, false);
var nlt = document.getElementById("nextTop");
nlt.addEventListener("click", getNext, false);
var nlb = document.getElementById("nextBottom");
nlb.addEventListener("click", getNext, false);
var llt = document.getElementById("lastTop");
llt.addEventListener("click", getLast, false);
var llb = document.getElementById("lastBottom");
llb.addEventListener("click", getLast, false);