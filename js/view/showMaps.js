const showMaps = (htmlElement,maps) =>{
    htmlElement.innerHTML += `<h2>${maps.name}</h2>
    <img src="${maps.img}" alt="image des gears">`
    htmlElement.style.margin = '30px'
}

export default showMaps