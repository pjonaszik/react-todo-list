import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const addTodoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todo
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todo
    removeTodo: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload);
    },
    //update todos
    updateTodo: (state, action) => {
      return state.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodo: (state, action) => {
      return state.map((todo: any) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  completeTodo,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;