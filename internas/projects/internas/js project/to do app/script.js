











const input = document.querySelector("input");

const addBtn = document.querySelector("#botonAdd");

const ul = document.querySelector(".ListaFinalTask");

const empty = document.querySelector(".empty")

addBtn.addEventListener("click", (e) => {
    if (input.value !== ""){
        const text = input.value;
        const li = document.createElement("li");
        const p = document.createElement("p");
        
        empty.style.display = "none"

        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn())
        ul.appendChild(li);


        input.value = "";

    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    })
    return deleteBtn
}