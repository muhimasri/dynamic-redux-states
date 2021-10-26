const initialState = {
  todoList: [
    { id: 1, title: "Do groceries", completed: false },
    { id: 2, title: "Do shopping", completed: false },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODO_LIST": {
      return {
        ...state,
        todoList: [...action.value],
      };
    }
    default:
      return state;
  }
};
