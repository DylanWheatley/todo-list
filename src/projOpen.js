

const projOpen = function (projName, projDes) {

    const holderTitle = document.createElement("h1");
    holderTitle.textContent = projName;

    const desTxt = document.createElement("p");
    desTxt.textContent = projDes;

    const container = document.querySelector(".container");

    const cardholder = document.querySelector(".cardholder");
    cardholder.remove();

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabDiv");

    container.appendChild(tabDiv);
    tabDiv.appendChild(holderTitle);
    tabDiv.appendChild(desTxt);

    return{tabDiv, container, holderTitle};
}

export {projOpen};