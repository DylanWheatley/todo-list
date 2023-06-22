import { projDisplay } from "./projDisplay";

const Project = function (title) {

    const container = document.querySelector(".cardholder");
    let des = document.createElement("p");
    const projDiv = document.createElement("div");

    projDiv.classList.add("proj");
    const projTitle = document.createElement("p");
    projTitle.textContent = title;
    projDiv.appendChild(projTitle);

    let desTxt = "";

        


    if (desTxt === "") {

    
    const desAdd = document.createElement("button");
    desAdd.classList.add("desAdd");
    desAdd.textContent = "Add Description";
    projDiv.appendChild(desAdd);



    desAdd.addEventListener('click', () => {
        desAdd.remove();

        const desInput = document.createElement("input");
        desInput.classList.add("desInput");

        const desBtn = document.createElement("button");
        desBtn.textContent = "Save";

        desBtn.addEventListener('click', () => {
            

            desBtn.remove();

            des.textContent = desInput.value;

            desInput.remove();

            projDiv.appendChild(des);

            const tabBtn = document.createElement("button");
            tabBtn.textContent = "Open Project";
            tabBtn.classList.add("tab");
            tabBtn.value = title;

            
            projDiv.appendChild(tabBtn);
        })

        projDiv.appendChild(desInput);
        projDiv.appendChild(desBtn)
    })

    }

    else {
        des = document.createElement("p");

            desBtn.remove();

            des.textContent = desTxt;

            desInput.remove();

            projDiv.appendChild(des);

            const tabBtn = document.createElement("button");
            tabBtn.textContent = "Open Project";
            projDiv.appendChild(tabBtn);
    }


    

    




    container.appendChild(projDiv);




    return {title, projDiv, container, desTxt};
};

export {Project};