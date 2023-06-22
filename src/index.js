//to do list project




//title, description, due date, priority (color coordinated?) bonus: notes or checklist

//module for switching between viewing each project
//resturaunt page but without making a new module for each
//module that takes in whichever project is clicked? maybe a factory inside this?

//delete projects

//local storage

import { Project } from "./project-maker";
import { projDisplay } from "./projDisplay";


let projArray = [];

projArray[0] = Project("Example");


function baseProj (){
    const add = document.querySelector(".add");
    const addInput = document.querySelector(".project-title");

    addInput.value = "";

    add.addEventListener('click', () => {
        let newTitle = addInput.value;
        const projectAdd = Project(newTitle);

        projArray.push(projectAdd);
        addInput.value = "";
    })

}

projDisplay(projArray);
baseProj();


//NTN: Need to rework code a bit. Need to make (another module?) function to loop through the project array and display all the cards. Inside of
//that loop is the check for if the description is empty or not.

//NTN2: Need to separate code a bit more. Need one module that makes the card. One module that puts the card on the screen. Doesn't work as currently written



