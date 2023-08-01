import React from 'react';
import './TodoItem.css';

function TodoItem (props){

  

  function toggleComplete (event){

    let element = event.target.className;

    if(element.includes('completed_todo')){
      //const newElement = element.replace('completed_todo','');
      //element = newElement;
      setCompletedTodo("")
    }else{
      //element = element + " completed_todo"; 
      setCompletedTodo("completed_todo");
    }

   return;
  } 
  const [completedTodo, setCompletedTodo] = React.useState(
    props.completed === true ? "completed_todo":""
  );


  return (
  <li>
    <span 
      className={`todoItem_completed-span ${completedTodo}`}
      onClick={(event) => {
      setCompletedTodo(!props.completed)
      toggleComplete(event)
      console.log(`Clases del item ${props.text} con las clases ${event.target.className}`)
    }}
    >V</span>
    <p className={`todoItem_description ${completedTodo}`}>{props.text}</p>
    <span className="todoItem_close ">X</span>
  </li>
  );
}
export { TodoItem };
