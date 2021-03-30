import {ADD_TASK, DELETE_TASK, ADD_ALL_TASK} from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_TASK: {
      const {tasks} = action.payload;
      return {
        ...state,
        tasks: tasks,
      };
    }
    case ADD_TASK: {
      const {task} = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }
    case DELETE_TASK: {
      const {_id} = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter(todo => todo._id != _id),
      };
    }
    default:
      return state;
  }
}
