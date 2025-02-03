const listElement=document.getElementById("todo-list");
const todoForm=document.getElementById('todo-form')
const todos=[];



function updateTodosUI(){
    listElement.innerHTML='';

    for(let todo of todos){
        const span=document.createElement('span');
        span.innerText=todo.text;

        const checkbox=document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.checked=todo.isComplated;
        const todoLiElement=document.createElement('li');
        if(todo.isComplated)todoLiElement.classList.add('checked')



        todoLiElement.append(checkbox);
        todoLiElement.append(span);
    
        listElement.append(todoLiElement);
    }
  

}
todoForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const todoText=(document.getElementById('todo-text').value);

  todos.push({text: todoText,isComplated:false});
  updateTodosUI();
})

