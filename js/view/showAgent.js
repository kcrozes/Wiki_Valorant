const showAgent = (htmlElement,agents) =>{
    const agentabilities = agents.abilities.map((e) => `<li><p>${e.slot} : ${e.displayName}</p><p>${e.description}</p></li>`)
    htmlElement.innerHTML += `<h2>${agents.name}</h2>
    <img src="${agents.img}" alt="image des agents">
    <p>Description : ${agents.description}</p>
    <p>Rôle : ${agents.role}</p>
    <p>Ces abilities sont : </p>
    <ul>
        ${agentabilities.join('')}
    </ul>`
}


export default showAgent