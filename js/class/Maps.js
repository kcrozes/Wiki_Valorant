class Maps {

    /*  constructor(name,img){
        this.name = name
        this.img = img
    } */

    //Setter name
    set name(name){
        this._name = name
    }
    //Getter name
    get name(){
        return this._name
    }

    //Setter img
    set img(img){
        this._img = img
    }
    //Getter img
    get img(){
        return this._img
    }

    initApi(infoApi){
        this.name = infoApi.displayName
        this.img = infoApi.splash
    }

    showTemplate = (htmlElement,maps) =>{
        htmlElement.innerHTML += `<div class="margin">
        <h2>${maps.name}</h2>
        <img class="map-picture" src="${maps.img}" alt="image des maps">
        </div>`
    }
}

export default Maps