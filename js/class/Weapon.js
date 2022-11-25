class Weapon {

    /*  constructor(name,img,cost,category,magsize,reloadtime,damage){
        this.name = name
        this.img = img
        this.cost = cost
        this.category = category
        this.magsize = magsize
        this.reloadtime = reloadtime
        this.damage = damage
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
    
    //Setter cost
    set cost(cost){
        this._cost = cost
    }
    //Getter cost
    get cost(){
        return this._cost
    }

    //Setter category
    set category(category){
        this._category = category
    }
    //Getter category
    get category(){
        return this._category
    }

    //Setter magsize
    set magsize(magsize){
        this._magsize = magsize
    }
    //Getter magsize
    get magsize(){
        return this._magsize
    }

    //Setter reloadtime
    set reloadtime(reloadtime){
        this._reloadtime = reloadtime
    }
    //Getter reloadtime
    get reloadtime(){
        return this._reloadtime
    }

    //Setter damage
    set damage(damage){
        this._damage = damage
    }
    //Getter damage
    get damage(){
        return this._damage
    }

    initApi(infoApi){
        if(infoApi.displayName != 'Mêlée'){
            this.name = infoApi.displayName
            this.img = infoApi.displayIcon
            this.cost = infoApi.shopData.cost
            this.category = infoApi.shopData.category
            this.magsize = infoApi.weaponStats.magazineSize
            this.reloadtime = infoApi.weaponStats.reloadTimeSeconds
            this.damage = infoApi.weaponStats.damageRanges
        }
    }

    showTemplate = (htmlElement,weapons) =>{
        const weaponsdamage = weapons.damage.map((e) =>{return`<li>De ${e.rangeStartMeters}m à ${e.rangeEndMeters}m l'arme fait ${e.headDamage} damages sur la tête et ${e.bodyDamage} damages sur le corps</li>`})
        htmlElement.innerHTML += `<div class="margin">
        <h2>${weapons.name}</h2>
        <img src="${weapons.img}" alt="image des gears">
        <p>Catégorie : ${weapons.category}</p>
        <p>Coût : ${weapons.cost} crédits</p>
        <p>Taille du chargeur : ${weapons.magsize} balles</p>
        <p>Temps de rechargement : ${weapons.reloadtime}s</p>
        <p>Dégats de l'arme :</p>
        <ul>
        ${weaponsdamage.join('')}
        </ul>
        </div>`
    }
}

export default Weapon

