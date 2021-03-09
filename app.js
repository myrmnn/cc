const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;
const navLogo = document.querySelector(".logo");

menu.addEventListener("click", () => {
	nav.classList.toggle("show");
	menu.classList.toggle("open");
});

function fixedNav() {
	if (window.innerWidth >= 1000 && window.scrollY > topOfNav) {
		nav.classList.add("fixedNav");
		navLogo.classList.add("show");
		document.body.style.paddingTop = nav.offsetHeight + "px";
	} else {
		nav.classList.remove("fixedNav");
		document.body.style.paddingTop = 0;
		navLogo.classList.remove("show");
	}
}

window.addEventListener("scroll", fixedNav);
