import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialtodoitems = [
    {
      name: "Buy Milk",
      date: "4/10/24",
    },
    {
      name: "Go to College",
      date: "4/10/24",
    },
    {
      name: "Do project",
      date: "4/10/24",
    },
    {
      name: "Build react app",
      date: "4/10/24",
    },
  ];

  let [todoitems, setTodoitem] = useState(initialtodoitems);

  function onClickAdd(toname, todate) {
    console.log("new item values:", toname, todate);
    const newList = [...todoitems, { name: toname, date: todate }];
    setTodoitem(newList);
  }

  const handleDeleteItem = (ItemName) => {
    console.log(`Deleted item: ${ItemName}`);
    const newList = todoitems.filter((item) => item.name !== ItemName);
    setTodoitem(newList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddToDo AddItem={onClickAdd} />
        {todoitems.length == 0 && <WelcomeMessage />}
        <ToDoItems todoitems={todoitems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
