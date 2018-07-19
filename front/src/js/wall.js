(function(){

    let $wallBody = document.querySelector(`.wall`)

    axios.get(`http://localhost:1337/tag`)
        .then(function (response) {
            console.log(response)
            postToWall(response)
        }); 
        
    function randomizer(array){
        let randomValue = array[Math.floor(Math.random()*array.length)];
        console.log(randomValue)
    }

    var numbers = [1,2,3,4,5,6,7,8,9]
    
    function postToWall(tags) {
        tags.data.forEach(data => {
            console.log(data.color)
            let $pTag = document.createElement(`p`)
            
            $pTag.textContent = data.text
            $pTag.style.color = data.color
            
            $pTag.classList.add(`tag`)
    
        
        
            $wallBody.appendChild($pTag)
        })
    }
    
})();