import {task} from '../screens/home/home';
import {status} from './constant';

export const nextID = (listTask: task[]) => {
  if (listTask.length === 0) return 1; 
  const latestID = listTask[listTask.length - 1].id;
  return latestID + 1;
};

export const sortTaskByID = (listTask: task[]) => {
  return listTask.sort((a: task, b: task) => a.id - b.id);
};

export const getStatusLabel = (statusValue: string) => {
  const [thisStatus] = status.filter(
    statusItem => statusItem.value === statusValue,
  );
  return thisStatus.label;
};

export const calculateItemIndex = (id: number, tasks: task[]) => {
  return {
    firstTask: tasks.findIndex(task => task.id === id) === 0,
    lastTask: tasks[tasks.length - 1].id === id,
  };
};
