'use strict';

var $tagButton = document.querySelector('button.tagit');
var enteredTag = document.querySelector('[name="tag"]');

enteredTag.addEventListener("keyup", function () {
	if (enteredTag.value.length === 0) {
		console.log('disabled');
		$tagButton.disabled = true;
	} else {
		console.log('enabled');
		$tagButton.disabled = false;
	}
});

$tagButton.addEventListener('click', function () {
	var enteredColor = document.querySelector('[name="color"]').value;
	var url = 'http://localhost:1337/tag';

	axios.post(url, {
		text: enteredTag.value,
		color: enteredColor
	}).then(function (response) {
		console.log(response);
	}).catch(function (error) {
		console.log(error);
	});

	enteredTag.value = '';
});
//# sourceMappingURL=main.js.map
