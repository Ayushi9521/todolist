import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import "./App.css";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import ToDoItemContextProvide from "./store/todoitems-store";

function App() {
  return (
    <ToDoItemContextProvide>
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddToDo />
          <WelcomeMessage />
          <ToDoItems />
        </div>
      </center>
    </ToDoItemContextProvide>
  );
}

export default App;
