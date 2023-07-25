import './TodoItem.css';

function TodoItem (props){
  return (
  <li>
    <span className="todoItem_completed-span">V</span>
    <p className="todoItem_description">{props.text}</p>
    <span className="todoItem_close">X</span>
  </li>
  );
}
export { TodoItem };
