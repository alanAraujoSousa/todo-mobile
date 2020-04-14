//Action Types, TODO create in actions folder
export const CREATE_TODO = `todo/CREATE`;
export const DELETE_TODO = `todo/DELETE`;
export const LIST_TODOS = `todo/LIST`;

export const initialTodoState = {
  items: []
}

const todosReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case CREATE_TODO:
        return {
          ...state,
          items: [...state.items, action.todo]
        };
    case LIST_TODOS:
      return {
        items: action.todos
      };
    case DELETE_TODO:
      // remove deleted todo from state
      return {
        items: state.items.filter(todo => todo.id !== action.id)
      };
    default:
      return state
  }
}

export default todosReducer;