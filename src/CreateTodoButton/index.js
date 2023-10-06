import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'; 

function CreateTodoButton (){

  const { setOpenModal  } = React.useContext(TodoContext);

  return (
    <button className="open-create-button"  onClick={
      (event) => {
        setOpenModal(true)
      }          
      }>+</button>
  );
}


export { CreateTodoButton };
