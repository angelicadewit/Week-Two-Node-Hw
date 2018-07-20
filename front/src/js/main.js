let $tagButton = document.querySelector(`button.post`)
let enteredTag = document.querySelector(`[name="tag"]`)
let modalClose = document.querySelector(`.close`)
let modal = document.querySelector(`.modal-wrapper`)

enteredTag.addEventListener("keyup",function(){
	if(enteredTag.value.length === 0){
		console.log('disabled');
		$tagButton.disabled = true;
	}
	else {  
		console.log('enabled');
		$tagButton.disabled = false;
	}
});


$tagButton.addEventListener(`click`, function() {
	let enteredColor = document.querySelector(`[name="color"]`).value
	let url = `http://localhost:1337/tag`


	axios.post(url, {
		text: enteredTag.value,
		color: enteredColor,
	})
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		});
	
	enteredTag.value = ``
	modal.classList.add(`is-visible`)
})

modalClose.addEventListener(`click`, function (event) {
	modal.classList.add('is-closing')
	setTimeout(function () {
		modal.classList.remove('is-visible')
		modal.classList.remove('is-closing')
	}, 500)
})
	



