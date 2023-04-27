function bigImg(x) {
    x.style.color = "gray";
}
function normalImg(x) {
    x.style.color = "black";
}

function linkChange(x) {
    document.getElementById("git").style.color = "gray";
}
function linkNormal(x) {
    document.getElementById("git").style.color = "black";
}

function gitChange(x) {
	document.getElementById("git").style.color = "gray";
}
function gitNormal(x) {
	document.getElementById("git").style.color = "black";
}

function igChange(x) {
	document.getElementById("ig").style.color = "gray";
}
function igNormal(x) {
	document.getElementById("ig").style.color = "black";
}

function fbChange(x) {
	document.getElementById("fb").style.color = "gray";
}
function fbNormal(x) {
	document.getElementById("fb").style.color = "black";
}

function liChange(x) {
	document.getElementById("li").style.color = "gray";
}
function liNormal(x) {
	document.getElementById("li").style.color = "black";
}

var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock() {
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

    if(nhour==0) { ap=" AM";nhour=12; }
    else if(nhour<12) { ap=" AM"; }
    else if(nhour==12) { ap=" PM"; }
    else if(nhour>12) { ap=" PM"; nhour-=12; }

    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;

    var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" - "+nhour+":"+nmin+":"+nsec+ap+"" + " (EST)";
    document.getElementById('clockbox').innerHTML=clocktext;
}

function SEmail() {
    var x = document.getElementById('email');
        x.style.display = 'block';
    var y = document.getElementById('text');
        y.style.display = 'none';
}

showTime();