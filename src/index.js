//to do list project




//title, description, due date, priority (color coordinated?) bonus: notes or checklist

//module for switching between viewing each project
//resturaunt page but without making a new module for each
//module that takes in whichever project is clicked? maybe a factory inside this?

//delete projects

//local storage

import { newProject } from "./project-maker";

const add = document.querySelector(".add");
const addInput = document.querySelector(".project-title");

addInput.value = "";

add.addEventListener('click', () => {
    let newTitle = addInput.value;
    const projectAdd = newProject(newTitle);
    addInput.value = "";

})
// const sec = newProject("yeah", "yeah", "yeah");
// const third = newProject("yeah", "yeah", "yeah");
// const four = newProject("yeah", "yeah", "yeah");