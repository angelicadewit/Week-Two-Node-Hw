

// when the user clicks the button
document.querySelector(`button.tagit`).addEventListener(`click`, function() {
	let enteredTag = document.querySelector(`[name="tag"]`).value
	let url = `http://localhost:1337/tag`

	axios.post(url, {
		tag: enteredTag
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
})