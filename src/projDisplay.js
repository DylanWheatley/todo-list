import { Project } from "./project-maker";

const projDisplay = function (array) {
    let len = array.length;

    for (i=0; i<len;i++) {
        const proj = Project(array[i].title);
    }

    return {array, proj};
}

export {projDisplay};