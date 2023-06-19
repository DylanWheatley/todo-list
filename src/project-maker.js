import { descriptionAdder } from "./desc-button";

const newProject = function (title) {

    const container = document.querySelector("#cardholder");

    const projDiv = document.createElement("div");

    projDiv.classList.add("proj");

    const projTitle = document.createElement("p");
    projTitle.textContent = title;

    const desAdd = document.createElement("button");
    desAdd.classList.add("desAdd");
    desAdd.textContent = "Add Description";

    desAdd.addEventListener('click', descriptionAdder);



    

    projDiv.appendChild(projTitle);
    projDiv.appendChild(desAdd);



    container.appendChild(projDiv);




    return {title, projDiv, container};
};

export {newProject};