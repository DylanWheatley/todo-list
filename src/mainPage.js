import { projDisplay } from "./projDisplay";
import { Project } from "./project-maker";

let mainPage = function () {

    let projArray = [];

    projArray[0] = Project("Example");


   // function baseProj (){
        const add = document.querySelector(".add");
        const addInput = document.querySelector(".project-title");

        addInput.value = "";

        add.addEventListener('click', () => {
            let newTitle = addInput.value;
            const projectAdd = Project(newTitle);

            projArray.push(projectAdd);
            addInput.value = "";
        })

    //}

projDisplay(projArray);
// baseProj();

return {projArray, add, addInput, projDisplay}
}

export {mainPage};