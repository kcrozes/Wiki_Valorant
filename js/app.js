import requestValorant from "./function/requestValorant.js"

const selectOption = document.getElementById('research-select')

document.addEventListener('DOMContentLoaded', function () {
    // Ecoute du select
    selectOption.addEventListener('change', function (){
      //Requête API + Affichage
      requestValorant(selectOption.value)
    })
})