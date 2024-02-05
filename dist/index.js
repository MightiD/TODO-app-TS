"use strict";
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const title = titleInput.value;
    console.log(title);
    const contentsInput = document.getElementById("contents");
    const contents = contentsInput.value;
    console.log(contents);
});
//# sourceMappingURL=index.js.map