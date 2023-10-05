import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'; 

function CreateTodoButton (){

  const { setOpenModal  } = React.useContext(TodoContext);

  return (
    <button onClick={
      (event) => {
        console.log('le diste click parcero...')
        setOpenModal(true)
      }          
      }>+</button>
  );
}


export { CreateTodoButton };
