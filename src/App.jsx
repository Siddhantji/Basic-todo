import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import Todoitems from "./components/Todoitems";

import "./App.css";


function App() {
  const todo =[{name:"Buy Milking", date: "20/07/202"},{name:"Buy Coffee", date: "24/07/202"}];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
       <Todoitems tasks = {todo}/>
      </center>
    </>
  );
}

export default App;
