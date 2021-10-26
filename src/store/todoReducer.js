const initialState = {
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TODO_LIST": {
      return action.value.reduce((accumulator, current) => ({ ...accumulator, [current.id]: current }), {});
    }
    case "UPDATE_TODO_FIELD": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.field]: action.value
        }
      }
    }
    default:
      return state;
  }
};
