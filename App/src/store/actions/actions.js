import {ADD_ALL_TASK, ADD_TASK, DELETE_TASK} from './actionTypes';

let nextTodoId = 0;

export const addTask = task => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

export const addAllTasks = tasks => ({
  type: ADD_ALL_TASK,
  payload: {
    tasks: tasks,
  },
});

export const deleteTodo = _id => ({
  type: DELETE_TASK,
  payload: {
    _id,
  },
});
