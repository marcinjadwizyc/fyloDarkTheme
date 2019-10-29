var cta = document.querySelector(".cta");
var testimonials = document.querySelector(".testimonials");
var footer = document.querySelector(".footer");
var form = {
	body: document.querySelector(".form"),
	inputContainer: document.querySelector(".form__inputContainer"),
	input: document.querySelector(".form__input")
};

function ctaPositionHandler() {
	var ctaHeight = cta.offsetHeight;

	cta.style.bottom = "-" + ctaHeight / 2 + "px";
	testimonials.style.paddingBottom = ctaHeight / 2 + 80 + "px";
	footer.style.paddingTop = ctaHeight / 2 + 80 + "px";
}

function formSubmitHandler(event) {
	event.preventDefault();
	if (/\S+@\S+\.\S+/.test(form.input.value)) {
		form.inputContainer.className = "form__inputContainer";
		alert("Thank you for your email!");
	} else {
		form.inputContainer.className += " form__inputContainer--invalid";
	}
}

document.onload = ctaPositionHandler();
document.onresize = ctaPositionHandler();

form.body.addEventListener("submit", formSubmitHandler);
