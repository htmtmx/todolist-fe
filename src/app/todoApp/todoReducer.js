export const todoReducer = (state=[], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...state, action.payload];
    case "[TODO] Toggle todo":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: todo.status === "completed" ? "pending" : "completed",
          };
        }
        return todo;
      });
    case "[TODO] Delete todo":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};