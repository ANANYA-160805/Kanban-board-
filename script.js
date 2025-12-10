const todo =document.getElementById('todo');
const progress =document.getElementById('progress');
const done =document.getElementById('done');
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

allowDragEvent(todo);
allowDragEvent(progress);
allowDragEvent(done);