const fieldset = Array.from(document.querySelectorAll("fieldset"));
const btn = document.querySelector(".node-btn").classList.toggle("hidden");
const btnJs = document.querySelector(".js-btn").classList.toggle("hidden");

console.log(Array.from)

// console.log(fieldset);

fieldset.map(field => {
	return field.querySelectorAll("input[type='checkbox']")
})

fieldset.forEach(field=>{
	field.querySelectorAll("input[type='checkbox'] + label").forEach(checkbox=>{
		checkbox.addEventListener("click", handleClick)
	})
})

function handleClick(){
	const element = this;
	// console.log(element.removeEventListener("click", handleClick))
	element.removeEventListener("click", handleClick)
	const parent = element.parentElement.parentElement
	// if(this.checked){
	// 	// console.log(this, "deze element is geklikt")
	// }
	// console.log(element)
	element.classList.add("clicked");

	while (parent.firstChild) {
	  parent.removeChild(parent.firstChild);
	}
	parent.insertAdjacentElement("beforeend",element);
}