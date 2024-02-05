"use strict";
const form = document.getElementById("form");
let todoList = [];
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
    }
    ;
});
//# sourceMappingURL=index.js.map