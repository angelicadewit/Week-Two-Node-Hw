"use strict";

// when the user clicks the button
document.querySelector("button.tagit").addEventListener("click", function () {
	var enteredTag = document.querySelector("[name=\"tag\"]").value;
	var url = "http://localhost:1337/tag";

	axios.post(url, {
		tag: enteredTag
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});
});
//# sourceMappingURL=main.js.map
