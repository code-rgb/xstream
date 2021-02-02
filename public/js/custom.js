const video_link = window.location.search.substr(1).split("url=")[1];
// const video_link =
// 	"https://storage.googleapis.com/tribal-sign-302203/MIA7TE51JSBS/22a_1612005883_2234.mp4";
const player = new Plyr("#player");

function change_src() {
	player.source = {
		type: "video",
		title: "Example title",
		sources: [
			{
				src: video_link,
				type: "video/mp4",
				//   size: 720
			},
		],
		// poster: poster
		autoplay: false,
		muted: true,
	};
}
if (video_link) {
	change_src();
}
// change_src();
//  ------------------Theme Toggle------------------
var darkMode = document.getElementById("darkMode");
var darkLabel = "darkModeLabel";
var darkLang = "Dark";
var lightLang = "Light";
var dark_font = "#620afa";
window.addEventListener("load", function () {
	if (darkMode) {
		initTheme();
		darkMode.addEventListener("change", function () {
			resetTheme();
		});
	}
});

function initTheme() {
	var darkThemeSelected =
		localStorage.getItem("darkMode") !== null &&
		localStorage.getItem("darkMode") === "dark";
	darkMode.checked = darkThemeSelected;
	darkThemeSelected
		? document.body.setAttribute("data-theme", "dark")
		: document.body.removeAttribute("data-theme");
	darkThemeSelected
		? (document.getElementById(darkLabel).innerHTML = darkLang)
		: (document.getElementById(darkLabel).innerHTML = lightLang);
	resetTheme();
}

function resetTheme() {
	if (darkMode.checked) {
		document.body.setAttribute("data-theme", "dark");
		localStorage.setItem("darkMode", "dark");
		document.getElementById(darkLabel).innerHTML = darkLang;
		$("body").css("background-color", "#111");

		$("body > nav > div > a").css("color", dark_font);
		$("body > nav").removeClass("navbar-light bg-light");

		// #hex to Filter https://codepen.io/sosuke/pen/Pjoqqp
		$("img").css(
			"filter",
			"invert(10%) sepia(100%) saturate(7114%) hue-rotate(267deg) brightness(94%) contrast(109%)"
		);
		$("body > div.container-fluid > h1").css("color", dark_font);
		$("body > div.jumbotron > div > h1").css("color", "#5e5e5e");
		$("#navbarSupportedContent > form > input").css(
			"background-color",
			"rgb(20, 20, 20)"
		);
		$("#darkModeLabel").css("color", "white");
		$("body > div.position-fixed.py-2.px-3.text-white.rounded-pill")
			.removeClass("pill_white")
			.addClass("bg-dark");
	} else {
		document.body.removeAttribute("data-theme");
		localStorage.removeItem("darkMode");
		document.getElementById(darkLabel).innerHTML = lightLang;
		$(
			"body > div.container-fluid > div.position-fixed.py-2.px-3.bg-dark.text-white.rounded-pill"
		).removeClass("bg-dark");
		// .addClass("navbar-light bg-light");
		$("#darkModeLabel").css("color", "black");
		$("body").css("background-color", "#f8f9fa");
		$("body > nav")
			.removeClass("navbar-dark bg-dark")
			.addClass("navbar-light bg-light");
		$("img").css("filter", "");
		$("body > nav > div > a").css("color", "");
		$("body > div.container-fluid > h1").css("color", "");
		$("body > div.jumbotron > div > h1").css("color", "");
		$("#navbarSupportedContent > form > input").css("background-color", "");
		$("body > div.position-fixed.py-2.px-3.text-white.rounded-pill")
			.removeClass("bg-dark")
			.addClass("pill_white");
	}
}
//  ----------------------------------------------
