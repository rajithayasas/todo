import axios from 'axios';
import {Platform} from 'react-native';

let baseUrl = 'http://10.0.2.2:3000/api/task';

if (Platform.OS === 'ios') {
  baseUrl = 'http://localhost:3000/api/task';
}

// fetch all tasks
export const fetchAlltask = async () => {
  const res = await axios.get(baseUrl);
  return res;
};

export const deleteTask = async _id => {
  const res = await axios.delete(baseUrl + '/' + _id);
  return res;
};

// add task
export const createTask = async task => {
  const res = await axios.post(baseUrl, {
    task: task,
  });
  return res;
};
