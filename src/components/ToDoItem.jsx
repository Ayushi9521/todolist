import { useContext } from "react";
import { ToDoItemsContext } from "../store/todoitems-store";
import { MdDelete } from "react-icons/md";
function ToDoItem({ todoname, date }) {
  const { deleteItem } = useContext(ToDoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoname)}
          >
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
