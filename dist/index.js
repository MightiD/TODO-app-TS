"use strict";
let todoList = [];
const table = document.getElementById("todoList");
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const contentsInput = document.getElementById("contents");
    const correctInput = document.getElementById("correctInput");
    if (!titleInput.value || !contentsInput.value) {
        correctInput.textContent = "You Must Enter an Input in Both Fields";
    }
    else {
        correctInput.textContent = "";
        const title = titleInput.value;
        const contents = contentsInput.value;
        let item = { title, contents };
        todoList.push(item);
        todoList.forEach(i => console.log(`Title: ${i.title} \nContents: ${i.contents}`));
        let newRow = table.insertRow(-1);
        let titleCell = newRow.insertCell(0);
        let contentsCell = newRow.insertCell(1);
        let titleText = document.createTextNode(item.title);
        let contentsText = document.createTextNode(item.contents);
        titleCell.appendChild(titleText);
        contentsCell.appendChild(contentsText);
    }
    ;
});
//# sourceMappingURL=index.js.map