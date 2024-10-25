javascript:(function() {
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "body { font-family: 'Comic Sans MS', 'Marker Felt', fantasy; color: #ff0000; }";
	document.head.appendChild(css);
	var message = document.createElement("div");
	message.style.position = "fixed";
	message.style.top = "0";
	message.style.left = "0";
	message.style.right = "0";
	message.style.bottom = "0";
	message.style.background = "black";
	message.style.color = "white";
	message.style.fontSize = "60px";
	message.style.fontFamily = "Impact";
	message.style.textAlign = "center";
	message.style.paddingTop = "200px";
	message.innerHTML = "Error: Page has been corrupted";
	document.body.appendChild(message);
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].style.animation = "imageShift 2s infinite";
		images[i].style.animationTimingFunction = "ease-in-out";
	}
	var elements = document.querySelectorAll("*");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].tagName != "IMG") {
			elements[i].style.animation = "spinAndBounce 1s infinite";
			elements[i].style.animationTimingFunction = "ease-in-out";
		}
	}
	var keyframes = "\        @keyframes imageShift {\            0% { transform: translateX(0px); }\            50% { transform: translateX(20px); }\            100% { transform: translateX(0px); }\        }\        @keyframes spinAndBounce {\            0% { transform: rotate(0deg) scale(1); }\            50% { transform: rotate(180deg) scale(1.2); }\            100% { transform: rotate(360deg) scale(1); }\        }\    ";
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = keyframes;
	document.head.appendChild(style);
})();