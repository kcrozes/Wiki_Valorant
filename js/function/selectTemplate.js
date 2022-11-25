import Gear from '../class/Gear.js'
import Maps from '../class/Maps.js'
import Weapon from '../class/Weapon.js'
import Agent from '../class/Agent.js'
/*import showGear from '../view/showGear.js'
import showMaps from '../view/showMaps.js'
import showWeapon from '../view/showWeapon.js'
import showAgent from '../view/showAgent.js'*/

const templateElement = document.getElementById('result')

function selectTemplate(selectOption,resultsApi){
    templateElement.innerHTML=''  //Reset du template
    const array = [
        {name: 'agents',class: new Agent()},
        {name: 'gear',class: new Gear()},
        {name: 'maps',class: new Maps()},
        {name: 'weapons',class: new Weapon()}
    ]
    for(const data of array){
        if(data.name === selectOption){
            for(const result of resultsApi){
                const value = data.class
                value.initApi(result)
                value.showTemplate(templateElement,value)
            }
        }
    }
}

export default selectTemplate

/*
    switch(selectOption){
        case 'agents':
            for (let i = 0; i < resultsApi.length; i++) {
            const resultInfo = resultsApi[i];
            if(resultInfo.isPlayableCharacter == true){
                const agents = new Agent(resultInfo.displayName,resultInfo.description,resultInfo.displayIcon,resultInfo.role.displayName,resultInfo.abilities)
                showAgent(templateElement,agents)
            }
            }
            break;
        case 'maps':
            for (let i = 0; i < itemID.length; i++) {
            const resultInfo = itemID[i];
            const maps = new Maps(resultInfo.displayName,resultInfo.splash)
            showMaps(templateElement,maps)
            }
            break;
        case 'gear':
            for (let i = 0; i < itemID.length; i++) {
            const resultInfo = itemID[i];
            const gears = new Gear(resultInfo.displayName,resultInfo.description,resultInfo.shopData.newImage,resultInfo.shopData.cost)
            showGear(templateElement,gears)
            }
            break;
        case 'weapons':
            for (let i = 0; i < itemID.length; i++) {
            const resultInfo = itemID[i];
            if(resultInfo.displayName != 'Melee'){
                const weapons = new Weapon(resultInfo.displayName,resultInfo.displayIcon,resultInfo.shopData.cost,resultInfo.shopData.category,resultInfo.weaponStats.magazineSize,resultInfo.weaponStats.reloadTimeSeconds,resultInfo.weaponStats.damageRanges)
                showWeapon(templateElement,weapons)
            }}
            break;
        default:
            console.log('Failure')*/