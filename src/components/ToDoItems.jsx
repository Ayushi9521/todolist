import ToDoItem from "./ToDoItem";
const ToDoItems = ({ todoitems, onDeleteClick }) => {
  return (
    <>
      {todoitems.map((items) => (
        <ToDoItem
          todoname={items.name}
          date={items.date}
          key={items.name}
          onDelete={onDeleteClick}
        />
      ))}
    </>
  );
};

export default ToDoItems;
