import Weapon from './Weapon.js'

class Skin extends Weapon{
    constructor(name,img,category){
        this.name = name
        this.img = img
        super(category)
    }

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
}

export default Skin