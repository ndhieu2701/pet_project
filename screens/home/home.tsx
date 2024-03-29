import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {
  ActivityIndicator,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalAddTask from './modalAddTask';
import TaskComponent from './taskComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type task = {
  id: number;
  title: string;
  content: string;
  status: string;
};

const Home = ({route, navigation}: Props) => {
  const [tasks, setTasks] = React.useState<task[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [refecth, setRefetch] = React.useState<boolean>(false);

  const getAllTask = async () => {
    try {
      const allTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(allTask || '[]'));
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Error', 'error');
      setIsLoading(false);
    }
  };

  const clearTask = async () => {
    await AsyncStorage.clear();
    setRefetch(!refecth);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(getAllTask, 2000);
  }, [refecth]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskController}>
        <View style={styles.title_view}>
          <Text style={styles.title}>All task</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <View style={styles.addBtn}>
            <Button title="Add task" onPress={() => setOpen(!open)} />
          </View>
          <View style={styles.addBtn}>
            <Button title="Clear all task" onPress={clearTask} />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scroll_view}>
        {!isLoading && tasks.length === 0 && <Text>No task was added.</Text>}
        {isLoading && <ActivityIndicator size={'large'} />}
        {!isLoading &&
          tasks.length > 0 &&
          tasks.map(task => (
            <TaskComponent task={task} tasks={tasks} key={task.id} />
          ))}
      </ScrollView>
      {open && (
        <ModalAddTask
          open={open}
          setOpen={setOpen}
          refetch={refecth}
          setRefetch={setRefetch}
          tasks={tasks}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  taskController: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addBtn: {
    minWidth: '20%',
  },
  title_view: {
    paddingBottom: 20,
  },
  scroll_view: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
export default Home;
