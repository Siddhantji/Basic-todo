import TodoItem from "./TodoItem";
import style from "./Todoitems.module.css";
function Todoitems({ tasks }) {
  return (
    <div className={style.itemsContainer}>
      {tasks.map((element) => (
        <TodoItem todoName={element.name} todoDate={element.date} />
      ))}
    </div>
  );
}

export default Todoitems;
