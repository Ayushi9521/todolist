import { useContext } from "react";
import { useRef } from "react";
import { ToDoItemsContext } from "../store/todoitems-store";
import { IoMdAddCircleOutline } from "react-icons/io";
function AddToDo() {
  // let [todoname, setTodoname] = useState("");
  // let [date, setDate] = useState("");

  // function handleName(e) {
  //   let name = e.target.value;
  //   setTodoname(name);
  // }

  // function handleDate(e) {
  //   let date = e.target.value;
  //   setDate(date);
  // }

  const todonameElement = useRef();
  const tododateElement = useRef();
  const { addNewItem } = useContext(ToDoItemsContext);
  function handleAdd(e) {
    e.preventDefault();
    const todoname = todonameElement.current.value;
    const date = tododateElement.current.value;
    todonameElement.current.value = "";
    tododateElement.current.value = "";
    addNewItem(todoname, date);
  }
  return (
    <div className="container">
      <form onSubmit={handleAdd}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              ref={todonameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={tododateElement} />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button">
              <IoMdAddCircleOutline /> Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
