"use strict";

// when the user clicks the button
document.querySelector("button.tagit").addEventListener("click", function () {
	var enteredTag = document.querySelector("[name=\"tag\"]").value;
	var enteredColor = document.querySelector("[name=\"color\"]").value;
	var url = "http://localhost:1337/tag";

	axios.post(url, {
		text: enteredTag,
		color: enteredColor
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
});
//# sourceMappingURL=main.js.map
