class Agent {
    
    /*  constructor(name,description,img,role,abilities){
        this.name = name
        this.description = description
        this.img = img
        this.role = role
        this.abilities = abilities
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

    //Setter role
    set role(role){
        this._role = role
    }
    //Getter role
    get role(){
        return this._role
    }

    //Setter abilities
    set abilities(abilities){
        this._abilities = abilities
    }
    //Getter abilities
    get abilities(){
        return this._abilities
    }

    initApi(infoApi){
        this._name = infoApi.displayName
        this._description = infoApi.description
        this._img = infoApi.displayIcon
        this._role = infoApi.role.displayName
        this._abilities = infoApi.abilities
    }

    showTemplate = (htmlElement,agents) =>{
        const agentabilities = agents.abilities.map((e) => `<li><p>${e.slot} : ${e.displayName}</p><p>${e.description}</p></li>`)
        htmlElement.innerHTML += `<div class="margin">
        <h2>${agents.name}</h2>
        <img src="${agents.img}" alt="image des agents">
        <p>Description : ${agents.description}</p>
        <p>Rôle : ${agents.role}</p>
        <p>Ces abilities sont : </p>
        <ul>
            ${agentabilities.join('')}
        </ul>
        </div>`
    }
}

export default Agent