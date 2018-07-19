(function(){

    let $wallBody = document.querySelector(`.wall`)

    axios.get(`http://localhost:1337/tag`)
        .then(function (response) {
            console.log(response)
            postToWall(response)
        });   
    
    function postToWall(tags) {
        tags.data.forEach(data => {
            console.log(data)
            let $pTag = document.createElement(`p`)
            
            $pTag.textContent = data
            $pTag.classList.add(`tag`)
        
            $wallBody.appendChild($pTag)
        })
    }
    
})();