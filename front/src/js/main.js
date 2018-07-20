let $tagButton = document.querySelector(`button.tagit`)
let enteredTag = document.querySelector(`[name="tag"]`)

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
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	
	enteredTag.value = ``;
})



