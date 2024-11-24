import { createContext } from "react";
import { useReducer } from "react";
export const ToDoItemsContext = createContext({
  todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const ToDoItemReducer = (currentItem, action) => {
  let newList = currentItem;
  if (action.type === "NEW_ITEM") {
    newList = [
      ...currentItem,
      { name: action.payload.toname, date: action.payload.todate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newList = currentItem.filter(
      (item) => item.name !== action.payload.ItemName
    );
  }
  return newList;
};

const ToDoItemContextProvide = ({ children }) => {
  const [todoitems, dispatchItem] = useReducer(ToDoItemReducer, []);

  function addNewItem(toname, todate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        toname,
        todate,
      },
    };
    dispatchItem(newItemAction);
  }

  const deleteItem = (ItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        ItemName,
      },
    };
    dispatchItem(deleteItemAction);
  };
  return (
    <ToDoItemsContext.Provider
      value={{
        todoitems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </ToDoItemsContext.Provider>
  );
};

export default ToDoItemContextProvide;
