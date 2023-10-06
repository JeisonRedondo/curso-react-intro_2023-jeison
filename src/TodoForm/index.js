import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <form className="form-modal">
      <label>Escribe tu nuevo TODO</label>

      <textarea
        className="textTodo"
        placeholder="No mms profe enserio?"
      />


      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={
            () => {
              setOpenModal(false)
            }
          }
        >Cancel</button>
        <button
          className="TodoForm-button TodoForm-button--add"

        >Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
