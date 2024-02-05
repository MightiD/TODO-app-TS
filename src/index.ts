//creates type for items
type Item = {
    title: string,
    contents: string
};

//creates the full ToDo list
let todoList: Item[] = [];

//gets the html form
const form = document.getElementById("form") as HTMLFormElement;

//listens for the submit button being pressed
form.addEventListener("submit", (event) => {

    //prevents default input being registered
    event.preventDefault();

    //gets all the necessary html elements
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const contentsInput = document.getElementById("contents") as HTMLInputElement;
    const correctInput = document.getElementById("correctInput") as HTMLDivElement;

    //checks if both inputs have a value
    if (!titleInput.value || !contentsInput.value){
        //sets div to this
        correctInput.textContent = "You Must Enter an Input in Both Fields";
    }
    else{
        //sets div to this
        correctInput.textContent = "";
    
        //gets input values
        const title = titleInput.value;
        const contents = contentsInput.value;

        //created var with those items
        let item: Item = {title, contents};

        //adds it to a list
        todoList.push(item);

        todoList.forEach(i => console.log(`Title: ${i.title} \nContents: ${i.contents}`))
    };
});
