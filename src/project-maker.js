

const newProject = function (title, description, due) {

    const container = document.querySelector("#cardholder");
    const projDiv = document.createElement("div");

    projDiv.classList.add("proj");

    container.appendChild(projDiv);




    return {title, description, due, projDiv, container};
};

export {newProject};