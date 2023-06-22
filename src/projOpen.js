

const projOpen = function (projName) {

    const container = document.querySelector(".container");

    const cardholder = document.querySelector(".cardholder");
    cardholder.remove();

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabDiv");

    container.appendChild(tabDiv);

    return{tabDiv, container};
}