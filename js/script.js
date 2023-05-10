// Ocultar el preload cuando se carga la página
window.addEventListener("load", function () {
	var preload = document.querySelector(".preload");
	preload.classList.add("loaded");
});