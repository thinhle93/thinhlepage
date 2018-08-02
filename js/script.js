var btn = document.getElementById('mybtn');
var modal = document.getElementById('blackjack_modal');
var btnclose = document.getElementById('btnclose');

var sharebtn = document.getElementById('sharepics_btn');
var sharemodal = document.getElementById('sharepics_modal');
var sharecls = document.getElementById('shareclose');

var sb = document.getElementById('sharepicsupdate_btn');
var sm = document.getElementById('sharepicsupdate_modal');
var sc = document.getElementById('shareupdateclose');

btn.onclick = function() {
	modal.style.display = "block";
}

btnclose.onclick = function() {
	modal.style.display = "none";
	document.getElementById('video').pause();
}

sharebtn.onclick = function(){
	sharemodal.style.display = "block";
}

sharecls.onclick = function() {
	sharemodal.style.display = "none";
	document.getElementById('sharepic_video').pause();
}

sb.onclick = function(){
	sm.style.display = "block";
}

sc.onclick = function() {
	sm.style.display = "none";
	document.getElementById('sharepicsupdate_video').pause();
}

