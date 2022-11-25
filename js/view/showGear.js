const showGear = (htmlElement,gear) =>{
    htmlElement.innerHTML += `<h2>${gear.name}</h2>
    <img src="${gear.img}" alt="image des gears">
    <p>Description : ${gear.description}</p>
    <p>Coût : ${gear.cost} crédits</p>`
}

export default showGear