let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}
// MAKING A LIST


function createListElement() {
	const checkBox = document.querySelectorAll('.userinput[type="checkbox"]');
	
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);