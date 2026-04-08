const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

const addTodo =()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <=0){
        alert("You must add a task in your to-do");
        return false;
    }
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
}



addButton.addEventListener('click', addTodo);

