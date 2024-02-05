import {task} from '../screens/home/home';

export const nextID = (listTask: task[]) => {
  if (listTask.length === 0) return 1;
  const latestID = listTask[listTask.length - 1].id;
  return latestID + 1;
};

export const sortTaskByID = (listTask: task[]) => {
  return listTask.sort((a: task, b: task) => a.id - b.id);
};
