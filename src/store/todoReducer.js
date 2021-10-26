const initialState = {
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODO_LIST": {
      return action.value.reduce((accumulator, current) => ({...accumulator, [current.id]: current}), {});
    }
    default:
      return state;
  }
};
