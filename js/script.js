var btn = document.getElementById('mybtn');
var modal = document.getElementById('blackjack_modal');
var btnclose = document.getElementById('btnclose');

var sharebtn = document.getElementById('sharepics_btn');
var sharemodal = document.getElementById('sharepics_modal');
var sharecls = document.getElementById('shareclose');

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

