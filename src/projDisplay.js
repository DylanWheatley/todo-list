import { Project } from "./project-maker";

const projDisplay = function (array) {
    let len = array.length;

    for (let i=0; i===len;i++) {
        let proj = Project(array[i].title);
        
    }

    return {array, len};
}

export {projDisplay};