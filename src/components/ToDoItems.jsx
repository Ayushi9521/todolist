import { useContext } from "react";
import { ToDoItemsContext } from "../store/todoitems-store";
import ToDoItem from "./ToDoItem";
const ToDoItems = () => {
  const { todoitems } = useContext(ToDoItemsContext);
  const { deleteItem } = useContext(ToDoItemsContext);

  return (
    <>
      {todoitems.map((items) => (
        <ToDoItem
          todoname={items.name}
          date={items.date}
          key={items.name}
          onDelete={deleteItem}
        />
      ))}
    </>
  );
};

export default ToDoItems;
