import selectTemplate from "./selectTemplate.js"

function requestValorant(selectOption){
    fetch('https://valorant-api.com/v1/'+selectOption+'?language=fr-FR&isPlayableCharacter=true')
    .then(response => response.json())
    .then(result => {
        //Selection du template
        selectTemplate(selectOption,result.data)
    })
    .catch(error => console.error(error))
}

export default requestValorant