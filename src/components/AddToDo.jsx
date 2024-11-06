import { useState } from "react";

function AddToDo({ AddItem }) {
  let [todoname, setTodoname] = useState("");
  let [date, setDate] = useState("");

  function handleName(e) {
    let name = e.target.value;
    setTodoname(name);
  }

  function handleDate(e) {
    let date = e.target.value;
    setDate(date);
  }
  function handleAdd() {
    AddItem(todoname, date);
    setTodoname("");
    setDate("");
  }
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleName}
            value={todoname}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDate} value={date} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
