(function(){

    let $wallBody = document.querySelector(`.wall`)
    let fontFamily = ["Permanent Marker", "Sedgwick Ave Display", "Walter Turncoat", "Rock Salt", "Short Stack"]

    axios.get(`http://localhost:1337/tag`)
        .then(function (response) {
            console.log(response)
            postToWall(response)
        }); 
        
    function randomizer(array){
        let randomValue = array[Math.floor(Math.random()*array.length)]
        return randomValue
    }

    function numbersRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function postToWall(tags) {
        tags.data.forEach(data => {
            console.log(data.color)
            let $pTag = document.createElement(`p`)
            
            $pTag.textContent = data.text
            $pTag.style.color = data.color

            $pTag.style.top = numbersRange(10,85) + `%`
            $pTag.style.left = numbersRange(10,85) + `%`
            $pTag.style.transform = `rotate(` + [`+`,`-`][Math.round(Math.random())] + numbersRange(0,40) + `deg)`
            console.log()
            $pTag.style.fontFamily= randomizer(fontFamily)
            $pTag.style.fontSize = numbersRange(4, 10) + `em`
            
            $pTag.classList.add(`tag`)

            $wallBody.appendChild($pTag)
        })
    }
    
})();