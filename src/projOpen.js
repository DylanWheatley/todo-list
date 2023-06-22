

const projOpen = function (projName) {

    const holderTitle = document.createElement("h1");
    holderTitle.textContent = projName;

    const container = document.querySelector(".container");

    const cardholder = document.querySelector(".cardholder");
    cardholder.remove();

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabDiv");

    container.appendChild(tabDiv);
    tabDiv.appendChild(holderTitle);

    return{tabDiv, container, holderTitle};
}

export {projOpen};