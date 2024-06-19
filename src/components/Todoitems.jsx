import TodoItem from "./TodoItem";

function Todoitems({ tasks }) {
  return (
    <div className="items-container">
      {tasks.map((element) => (
        <TodoItem todoName={element.name} todoDate={element.date} />
      ))}
    </div>
  );
}

export default Todoitems;
