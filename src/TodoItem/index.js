import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';
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
