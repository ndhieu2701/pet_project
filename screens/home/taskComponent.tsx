import React from 'react';
import {task} from './home';
import {StyleSheet, Text, View} from 'react-native';
import {calculateItemIndex} from '../../ultil/function';

type Props = {
  task: task;
  tasks: task[];
};
const TaskComponent = ({task, tasks}: Props) => {
  return (
    <View
      style={[
        styles.container,
        calculateItemIndex(task.id, tasks).firstTask && styles.firstItem,
        calculateItemIndex(task.id, tasks).lastTask && styles.lastItem,
      ]}>
      <View style={[styles.w_5, styles.center]}>
        <Text>{task.id}</Text>
      </View>
      <View style={[styles.w_40, styles.center]}>
        <Text>{task.title}</Text>
      </View>
      <View style={[styles.w_40, styles.center]}>
        <Text>{task.content}</Text>
      </View>
      <View style={[styles.w_15, styles.center]}>
        <Text>{task.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxHeight: 100,
    height: 'auto',
    width: '100%',
    borderWidth: 1,
    padding: 2,
    marginVertical: 4,
  },
  firstItem: {
    marginTop: 0,
  },
  lastItem: {
    marginBottom: 0
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  w_5: {
    width: '10%',
  },
  w_40: {
    width: '35%',
  },
  w_15: {
    width: '15%',
  },
});

export default TaskComponent;
