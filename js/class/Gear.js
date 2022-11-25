class Gear {
    
    /*  constructor(name,description,img,cost){
        this._name = name
        this._description = description
        this._img = img
        this._cost = cost
    } */


    //Setter name
    set name(name){
        this._name = name
    }
    //Getter name
    get name(){
        return this._name
    }

    //Setter description
    set description(description){
        this._description = description
    }
    //Getter description
    get description(){
        return this._description
    }

    //Setter img
    set img(img){
        this._img = img
    }
    //Getter img
    get img(){
        return this._img
    }

    //Setter cost
    set cost(cost){
        this._cost = cost
    }
    //Getter cost
    get cost(){
        return this._cost
    }
    
    initApi(infoApi){
        this._name = infoApi.displayName
        this._description = infoApi.description
        this._img = infoApi.shopData.newImage
        this._cost = infoApi.shopData.cost
    }

    showTemplate(htmlElement,gear){
        htmlElement.innerHTML += `<div class="margin">
        <h2>${gear.name}</h2>
        <img src="${gear.img}" alt="image des gears">
        <p>Description : ${gear.description}</p>
        <p>Coût : ${gear.cost} crédits</p>
        </div>`
    }
}

export default Gear