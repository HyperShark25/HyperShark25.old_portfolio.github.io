let header = document.getElementById("header");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let freeCodeCamp = document.getElementById("freeCodeCamp");
let resume = document.getElementById("resume");
/*let contact = document.getElementById("contact");
let footer = document.getElementById("footer");*/
let button = document.getElementById("previous_page");
let body = document.querySelector("body");

let array = [header, about, skills, projects, freeCodeCamp, resume];

function upper_button () {
	button.style.bottom = "80%";
}

function lower_button () {
	button.style.bottom = "20%";
}


function scroll_page(page) {
	for (let i=0; i < array.length; i++) {
		if (window.getComputedStyle(array[i]).opacity == "1") {
			array[i].style.opacity = "0";
			array[i].style.visibility = "hidden";
			array[i].style.animation = "disappear 1s";
			if (page === "next") {
				if (i < array.length-1) { 
					array[i+1].style.opacity = "1";
					array[i+1].style.visibility = "visible";
					array[i+1].style.animation = "appear 1s";
					if (i == 4) {
						lower_button();
					}
				} else {
					array[0].style.animation = "appear 1s";
					array[0].style.opacity = "1";
					array[0].style.visibility = "visible";
					upper_button();
				}
			} else {
				if (i == 0 ) {
					array[5].style.animation = "appear 1s";
					array[5].style.opacity = "1";
					array[5].style.visibility = "visible";
					lower_button();
				} else {
					array[i-1].style.opacity = "1";
					array[i-1].style.visibility = "visible";
					array[i-1].style.animation = "appear 1s";
					upper_button();
				}
			}
		}
		if (array[3].style.visibility == "visible"  || array[4].style.visibility == "visible") {
			body.style.overflowY = "visible";
			body.style.overflowX = "hidden";
		} else {
			body.style.overflow = "hidden";
		}
	}
	window.scrollTo(0, 0);
}


window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}