import { CompleteIcon } from '../CompleteIcon/CompleteIcon.js';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon.js';
import React from 'react';
import './TodoItem.css';

function TodoItem (props){

  
  return (
    <li>
      <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
    />

    <p className={`todoItem_description ${props.completed && "completed_todo" }`}>{props.text}</p>
    <DeleteIcon
    onDelete={props.onDelete}
  />
    </li>
  );
}
export { TodoItem };
