import React from 'react';
import "./Modal.css";
import { createPortal } from 'react-dom';
import { TodoContext } from '../TodoContext';


function Modal({children}){

  const { setOpenModal  } = React.useContext(TodoContext);


  return createPortal(
    <div className="Modal">
      {children}
      <div className="modal-buttons">
        <button className="createTodo"
        onClick={(event) =>{
          
        }}
        >Create</button>
        <button className="cancelTodo"
        onClick={(event) =>{
          setOpenModal(false)
        }}
        >Cancel</button>
      </div>
      <input type="text" className="textTodo" />
    </div>,
    document.getElementById('modal')
  )
}
export { Modal };