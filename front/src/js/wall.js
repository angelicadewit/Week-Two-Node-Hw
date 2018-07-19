(function(){

    let $wallBody = document.querySelector(`.wall`)
    let numbers = [1,2,3,4,5,6,7,8]

    axios.get(`http://localhost:1337/tag`)
        .then(function (response) {
            console.log(response)
            postToWall(response)
        }); 
        
    function randomizer(array){
        let randomValue = array[Math.floor(Math.random()*array.length)]
        return randomValue
    }

    function positioning(numbers) {
        let newValue = "";
        for (var i = 0; i <= 1; i++)
            newValue += randomizer(numbers)
        console.log(newValue)
        return newValue
    }

    positioning(numbers)
    
    function postToWall(tags) {
        tags.data.forEach(data => {
            console.log(data.color)
            let $pTag = document.createElement(`p`)
            
            $pTag.textContent = data.text
            $pTag.style.color = data.color

            
            $pTag.style.top = positioning(numbers) + `%`
            $pTag.style.right = positioning(numbers) + `%`
            
            $pTag.classList.add(`tag`)
    
        
        
            $wallBody.appendChild($pTag)
        })
    }
    
})();