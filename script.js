const todo =document.getElementById('todo');
const progress =document.getElementById('progress');
const done =document.getElementById('done');
const columns =  [ todo,progress,done ];
let draggedElement=null;

const tasks =document.querySelectorAll('.task');

tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
        draggedElement=task;
    })
})



function allowDragEvent(column){
column.addEventListener("dragenter",(e) => {
    e.preventDefault();
    column.classList.add("hover-over")
})
column.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    column.classList.remove("hover-over")
})
column.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
column.addEventListener("drop",(e)=>{
    e.preventDefault();

    column.appendChild(draggedElement);
    column.classList.remove("hover-over");
})
}

columns.forEach(column =>{
    const tasks = column.querySelectorAll(".task");
    const count = column.querySelector(".right");

    count.textContent = tasks.length;
})


allowDragEvent(todo);
allowDragEvent(progress);
allowDragEvent(done);

const togglemodalbutton = document.querySelector("#toggle-modal")
const modalbg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")
const addtaskbutton = document.querySelector("#add-new-task")

togglemodalbutton.addEventListener("click", ()=>{
    modal.classList.toggle("show-modal")
})

modalbg.addEventListener("click", ()=>{
    modal.classList.remove("show-modal")
})

addtaskbutton.addEventListener("click",()=>{
    const tasktitle = document.querySelector("#add-title-input").value
    const taskdescription = document.querySelector("#add-description-input").value

   const div = document.createElement("div")
    div.classList.add("task")
    div.setAttribute("draggable","true")

    div.innerHTML= `<h3>${tasktitle}</h3>
    <p>${taskdescription}</p>
    <button>Delete</button>`
    
    todo.appendChild(div)
 
   columns.forEach(column =>{
    const tasks = column.querySelectorAll(".task");
    const count = column.querySelector(".right");

    count.textContent = tasks.length;
})
    
    div.addEventListener("drag",(e)=>{
        draggedElement=div;
    })

    modal.classList.remove("show-modal")
          
})

