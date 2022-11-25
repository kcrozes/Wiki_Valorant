const showWeapon = (htmlElement,weapons) =>{
    const weaponsdamage = weapons.damage.map((e) =>{return`<li>De ${e.rangeStartMeters}m à ${e.rangeEndMeters}m l'arme fait ${e.headDamage} damages sur la tête et ${e.bodyDamage} damages sur le corps</li>`})
    htmlElement.innerHTML += `<h2>${weapons.name}</h2>
    <img src="${weapons.img}" alt="image des gears">
    <p>Catégorie : ${weapons.category}</p>
    <p>Coût : ${weapons.cost} crédits</p>
    <p>Taille du chargeur : ${weapons.magsize} balles</p>
    <p>Temps de rechargement : ${weapons.reloadtime}s</p>
    <p>Dégats de l'arme :</p>
    <ul>
    ${weaponsdamage.join('')}
    </ul>`
}

export default showWeapon