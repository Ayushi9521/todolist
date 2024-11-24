import { useContext } from "react";
import { ToDoItemsContext } from "../store/todoitems-store";
function WelcomeMessage() {
  const { todoitems } = useContext(ToDoItemsContext);

  return (
    todoitems.length === 0 && (
      <h3 className="text-center">There is no task to do.</h3>
    )
  );
}

export default WelcomeMessage;
