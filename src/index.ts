const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title") as HTMLInputElement;
    const title = titleInput.value;

    console.log(title);

    const contentsInput = document.getElementById("contents") as HTMLInputElement;
    const contents = contentsInput.value;

    console.log(contents);

});
