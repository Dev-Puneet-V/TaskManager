import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    selectTask: (state, action) => {
      const taskId = action.payload;
      state.selectedTask = state.tasks.find((task) => task.id === taskId);
    },
    updateTaskStatus: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, selectTask, updateTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
