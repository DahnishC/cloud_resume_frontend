function visitorCounter(){
	fetch("https://45bu0jitgl.execute-api.us-east-1.amazonaws.com/visitorCounter")
		.then(response => response.text())
		.then((body) => {
			document.getElementByID("visitor-counter").innerHTML=body
	})
}