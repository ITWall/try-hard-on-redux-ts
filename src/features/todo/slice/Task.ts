import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../app/store";

export interface Task {
  id: string;
  title: string;
  content: string;
  createdDate: string;
  finishDate: string;
  status: "in progress" | "passed" | "failed";
}

let initialState: Task[] = [];

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      let indexDelete: number = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.splice(indexDelete, 1);
    },
    markFailedTask: (state, action: PayloadAction<Task>) => {
      //   let newState = [...state];
      let indexChanging: number = state.findIndex(
        (item) => item.id === action.payload.id
      );
      let newState = JSON.parse(JSON.stringify(state));
      newState[indexChanging] = {
        ...newState[indexChanging],
        status: "failed",
      };
      return newState;
      // state[indexChanging] = {...state[indexChanging], status: "failed"}
    },
    markPassedTask: (state, action: PayloadAction<Task>) => {
      let indexChanging: number = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexChanging] = {
          ...state[indexChanging],
          status: "passed",
          finishDate: new Date().toDateString()
      };
    },
  },
});

export const selectTask = (state: RootState) => state.tasks;

export default TaskSlice.reducer;
