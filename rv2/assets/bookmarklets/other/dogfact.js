javascript:async function dogFact() {
	try {
		let t = await fetch("https://dogapi.dog/api/v2/facts");
		if(!t.ok)throw Error(`Failed to fetch dog fact. Status: ${t.status}`);
		let a = await t.json(), o = a.data[0].attributes.body;
		alert(o);
	}
	catch(c) {
		console.error("An error occurred:", c);
	}
}
dogFact();