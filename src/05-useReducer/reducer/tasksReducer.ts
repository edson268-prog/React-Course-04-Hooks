interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}
export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  //Siempre debe regresar valores del tipo state, (ejemplo, state es string, regresar string)
  switch (action.type) {
    case "ADD_TODO": {
      //   if (inputValue.length === 0) return;

      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      // NO hacer, no mutar estados | Mala practica, no se avisa a react que hubo cambio
      //state.todos.push(newTodo);

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
        // setTodos((prev) => [...prev, newTodo]); // Opcional
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};
