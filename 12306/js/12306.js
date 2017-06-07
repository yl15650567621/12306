var img = document.getElementById('mainbody-top-imgone-img');

img.onclick=function exchange() {
	// body...
	var fromCity = document.getElementById('mainbody-top-from-input1').value;
	var toCity = document.getElementById('mainbody-top-from-input2').value;
	document.getElementById('mainbody-top-from-input1').value = toCity;
	document.getElementById('mainbody-top-from-input2').value = fromCity;

}

var setOutData = document.getElementById('set-out-data');
setOutData.onfocus = function showOutData(){
	document.getElementById("toublecalender").style.display = "block";
}

var toublecalenderCloseImg = document.getElementById("toublecalender-close-img");
toublecalenderCloseImg.onclick = function closeOutData(){
	document.getElementById("toublecalender").style.display = "none";
}
// toublecalenderCloseImg.addEventListener('click',closeOutData,false);