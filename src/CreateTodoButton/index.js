import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button className="open-create-button" onClick={
      () => {
        setOpenModal(true)
        console.log('Oprimiendo createtodobutton')
      }
    }>+</button>
  );
}


export { CreateTodoButton };
