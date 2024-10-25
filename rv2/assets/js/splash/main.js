funky_title_splash = document.getElementById("funky-title-splash");

	// Add Splash if Enabled
if (localStorage.rv2_splashtext === "enabled") {

		// First Time Entry
	if (localStorage.rv2_seensplash === "no") {
		funky_title_splash.innerHTML = "Inside Your Walls";
	}

		// Add Splash Text Directories
	const splashArray = ["varDefault", "varMarch", "varOctober", "varNovember", "varDecember", "clickable"];
	for (let i = 0; i < splashArray.length; ++i) {
		let elem = splashArray[i];
		onAddAsset("splash/" + elem, "script");
	}

		// Call a Random Text Option
	function onRandoText() {
			// Seasonal (20% Chance)
		if (Math.random() > 0.20) { // Default (80% Chance)
			const values = Object.values(listDefault.splashesDefault);
			randomValue = listDefault.splashesDefault[Math.floor(Math.random() * values.length)];
			funky_title_splash.innerHTML = randomValue.splashEntry;
		} else {
			onSeasonalSplash();
		}
	};

		// Add Seasonal Text (if Called)
	function onSeasonalSplash() {
		var month = new Date().getMonth() + 1;
		if (month == 3) { // March
			const values = Object.values(listMarch.splashesMarch);
			randomValue = listMarch.splashesMarch[Math.floor(Math.random() * values.length)];
		} else if (month == 10) { // October
			const values = Object.values(listOctober.splashesOctober);
			randomValue = listOctober.splashesOctober[Math.floor(Math.random() * values.length)];
		} else if (month == 11) { // November
			const values = Object.values(listNovember.splashesNovember);
			randomValue = listNovember.splashesNovember[Math.floor(Math.random() * values.length)];
		} else if (month == 12) { // December
			const values = Object.values(listDecember.splashesDecember);
			randomValue = listDecember.splashesDecember[Math.floor(Math.random() * values.length)];
		} else { // Normal
			const values = Object.values(listDefault.splashesDefault);
			randomValue = listDefault.splashesDefault[Math.floor(Math.random() * values.length)];
		}
		funky_title_splash.innerHTML = randomValue.splashEntry;
	}

		// Set Default Values if None Present
	if (localStorage.rv2_splashtext === undefined) {
		localStorage.rv2_splashtext = "enabled";
	}
	if (localStorage.rv2_seensplash === undefined) {
		localStorage.rv2_seensplash = "no";
	}

		// Trigger Randomized Text
	window.onload = function() {
		let funky_title_splash = document.getElementById("funky-title-splash");
		if (typeof(funky_title_splash) != "undefined" && funky_title_splash != null && localStorage.rv2_seensplash != "no") {
			onRandoText();
		} else { // First Time Entry
			localStorage.rv2_seensplash = "yes";
		}
	}
}