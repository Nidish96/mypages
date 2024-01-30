// Collapse on Click //////////////////////////////////////////////////////////
var secs = document.querySelectorAll('[id^="outline-container-"]');

var ocrgx = /^outline-text-(?=.*[5-9]\d*$).*$/;
var rcns = document.querySelectorAll('[class^="outline-text-"]');
var rcnsf = Array.from(rcns).filter(function (element)
				  {return ocrgx.test(element.className);});
var rcprs = rcnsf.map(function(e) {return e.parentElement;});

Array.from(secs).forEach(function(sec) {
    var cln = sec.className.substr(8);
    var ttl = sec.getElementsByTagName("h"+cln)[0];
    var cnt = sec.getElementsByClassName("outline-text-"+cln)[0];
    
    ttl.style.cursor = 'pointer';
    ttl.addEventListener("click", function (e) {
	cnt.style.display = (cnt.style.display=='')?'none':'';});
});

for (var i = 0; i < rcprs.length; i++) {
  (function(index) {
      rcprs[index].style.cursor = 'pointer';
      rcprs[index].addEventListener("click", function (e) {
	  rcnsf[index].style.display = (rcnsf[index].style.display=='')?'none':'';});
    })(i);
}

// Collapse all on button press ///////////////////////////////////////////////
var stat = '';
var btn = document.getElementsByClassName("tglv");
function togglevisib(e=1) {
    for (var i = 0; i < rcns.length; i++)
	rcns[i].style.display = (stat=='')?'none':'';
    for (var j = 0; j < btn.length; j++)
	btn[j].value = (stat=='')?'show all':'hide all';    
    stat = (stat=='')?'none':'';
}
for (var i = 0; i < btn.length; i++) btn[i].addEventListener("click", togglevisib);
document.addEventListener('keypress', function(e) {if (e.which==116) togglevisib();});
