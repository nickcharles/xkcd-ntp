var oReq = new XMLHttpRequest();
oReq.responseType = "document";
oReq.onload = setup;
oReq.open("GET", "https://what-if.xkcd.com/", true);
oReq.send();

function setup() {
    var title = this.response.getElementsByTagName('title');
    var question = this.response.getElementById("question").innerHTML;
    document.getElementById('dynamicTitle').innerHTML = "What If - " + title[0].innerHTML;
    document.getElementById('whatIfQuestion').innerHTML = question;
}