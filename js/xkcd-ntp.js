function reqListener () {
  console.log(this.response);
  console.log(this.response.img);
  document.getElementById("comicTitle").innerHTML=this.response.title;
  document.getElementById("comic").src=this.response.img;
  document.getElementById("comic").alt=this.response.title;
  document.getElementById("comic").title=this.response.alt;
}

//Create new XMLHttpRequest object and get new comic information
var oReq = new XMLHttpRequest();
oReq.responseType = "json";
oReq.onload = reqListener;
oReq.open("GET", "http://xkcd.com/info.0.json", true);
oReq.send();