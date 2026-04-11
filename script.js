const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

let editTodo = null;

//Function to add to-do
const addTodo =()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <=0){
        alert("You must add a task in your to-do");
        return false;
    }

    if(addButton.value ==="Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addButton.value = "Add";
        inputBox.value ="";
    }
    else{
    // Creating p tag
   const li = document.createElement("li");
   const p = document.createElement("p");
   p.innerHTML = inputText;
   li.appendChild(p);
   
   //Creating delete Button
   const deleteButton= document.createElement("button");
   deleteButton.innerText= "REMOVE";
   deleteButton.classList.add("button","deleteButton");
   li.appendChild(deleteButton);

   //Creating Edit Button
   const editButton = document.createElement("button");
   editButton.innerText= "EDIT";
   editButton.classList.add("button", "editButton");
   li.appendChild(editButton);
   todoList.appendChild(li);
   inputBox.value= ""; 

   saveLocalTodos(inputText);
}
}


// Function to update  to-do
const updateTodo= (e) => {
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addButton.value= "Edit";
        editTodo = e;
    }
}

const saveLocalTodos = (todo) =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
       todos = JSON.parse(localStorage.getItem(todos)); 
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

    // Creating p tag
   const li = document.createElement("li");
   const p = document.createElement("p");
   p.innerHTML = todo;
   li.appendChild(p);
   
   //Creating delete Button
   const deleteButton= document.createElement("button");
   deleteButton.innerText= "REMOVE";
   deleteButton.classList.add("button","deleteButton");
   li.appendChild(deleteButton);

   //Creating Edit Button
   const editButton = document.createElement("button");
   editButton.innerText= "EDIT";
   editButton.classList.add("button", "editButton");
   li.appendChild(editButton);
   
   todoList.appendChild(li);

        });
    }
}

addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);















