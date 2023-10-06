import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };



  return (
    <form
      className="form-modal"
      onSubmit={onSubmit}
    >
      <label>Escribe tu nuevo TODO</label>

      <textarea
        className="textTodo"
        placeholder="No mms profe enserio?"
        value={newTodoValue}
        onChange={onChange}
      />


      <div className="TodoForm-buttonContainer">
        <button
          type=""
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancel</button>
        <button
          type="submi1o"
          className="TodoForm-button TodoForm-button--add"
          onClick={
            () => {

            }
          }
        >Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
