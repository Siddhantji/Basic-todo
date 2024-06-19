import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <div className="items-container">
          <TodoItem todoName="Kikk" todoDate="04/12/2000" />
          
        </div>
      </center>
    </>
  );
}

export default App;
