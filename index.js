const firstnum = document.querySelector('.first num');
const secondnum = document.querySelector('.second num');
const got = document.querySelector('.got');
const  radioButtons = document.querySelector('input[name=""]');
const  getAnswer = document.querySelector('.getAnswer');

function addf(firstnum,secondnum) {
	return firstnum + secondnum;
}

function multiplyf(firstnum,secondnum) {
	return firstnum * secondnum;
}

function subtractf(firstnum,secondnum) {
	return firstnum - secondnum;
}

function dividef(firstnum,secondnum) {
	return firstnum / secondnum;
}

got.addEventListener("click", () => {
	let selectedFunc;
	let answ;
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selectedFunc = radioButton.value;
			if (selectedFunc === addnum){
				answ = addf();
			} else if(selectedFunc === multiplynum){
				answ = multiplyf()
			} else if(selectedFunc === subtractnum ){
				answ = subtractf()
			}else {
				answ = dividef()
			}
			got.textContent = 'solution: ${answ}';
			break;
}}});

console.log("hello");

/*got.addEventListener("click", checkButton);

function doIt(){
	if (selectedFunc === addnum){
		addf();
	} else if(selectedFunc === multiplynum){
		multiplyf()
	} else if(selectedFunc === subtractnum ){
		subtractf()
	}else {
		dividef()
	}
};

got.textContent = answ.toString();*/