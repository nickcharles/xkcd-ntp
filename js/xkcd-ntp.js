//Create new XMLHttpRequest object and variables to store most recent and current comic
var oReq = new XMLHttpRequest();
var recComic = null;
var curComic = null;

//Set event listeners on all buttons to run 
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

//Specify response type and send initial get request
oReq.responseType = "json";
oReq.onload = setup;
oReq.open("GET", "http://xkcd.com/info.0.json", true);
oReq.send();

//Wait for request and then populate title and image, set current comic
function reqListener() {
  document.getElementById("comicTitle").innerHTML = this.response.title;
  document.getElementById("comicNumber").innerHTML = "#"+this.response.num;
  document.getElementById("comic").src = this.response.img;
  document.getElementById("comic").alt = this.response.title;
  document.getElementById("comic").title = this.response.alt;

  curComic = this.response.num;
}

//Set most recent comic and then run reqListener()
function setup() {
  recComic = this.response.num;
  var listener = reqListener.bind(this);
  listener();
}

//HTTP get request to get whatever comic specified
function getComic(url) {
  var Req = new XMLHttpRequest();
  Req.responseType = "json";
  Req.onload = reqListener;
  Req.open("GET", url, true);
  Req.send();
}

//Get the first comic of the series
function getFirst() {
  getComic("http://xkcd.com/1/info.0.json");
}

//Get the previous comic in the series
function getPrev() {
  getComic("http://xkcd.com/" + (curComic-1) + "/info.0.json")
}

//Get a random comic from the series
function getRandom() {
  randComic = Math.floor((Math.random() * recComic) + 1);
  getComic("http://xkcd.com/" + randComic + "/info.0.json")
}

//Get the next comic in the series
function getNext() {
  getComic("http://xkcd.com/" + (curComic+1) + "/info.0.json")
}

//Get the last comic in the series
function getLast() {
  getComic("http://xkcd.com/info.0.json");
}