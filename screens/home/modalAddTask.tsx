import React, {useEffect} from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {task} from './home';
import {nextID} from '../../ultil/function';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import {status} from '../../ultil/constant';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  refetch: boolean;
  setRefetch: (value: boolean) => void;
  tasks: task[];
};

const ModalAddTask = ({open, setOpen, refetch, setRefetch, tasks}: Props) => {
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [statusValue, setStatusValue] = React.useState<string>(status[0].value);

  const closeModal = () => {
    setOpen(!open);
    setRefetch(!refetch);
  };

  const createTask = async () => {
    const data: task = {
      id: nextID(tasks),
      title,
      content,
      status: statusValue,
    };
    const newListTask: task[] = [...tasks, data];
    await AsyncStorage.setItem('tasks', JSON.stringify(newListTask));
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={closeModal}>
      <View style={[styles.flex1, styles.pd_60, styles.bgModal, styles.center]}>
        <View style={[styles.modal, styles.bgModalContent]}>
          <ScrollView style={[styles.modalContent]}>
            <View style={[styles.center, styles.wrap]}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={(text: string) => setTitle(text)}
              />
            </View>
            <View style={[styles.center, styles.wrap]}>
              <Text style={styles.label}>Content</Text>
              <TextInput
                style={[styles.textInput, styles.text_multiple]}
                editable
                multiline
                numberOfLines={4}
                value={content}
                onChangeText={(text: string) => setContent(text)}
              />
            </View>
            <View style={[styles.center, styles.wrap]}>
              <Text style={styles.label}>Status</Text>
              <Picker
                selectedValue={statusValue}
                onValueChange={(itemValue: string) => setStatusValue(itemValue)}
                style={styles.picker}
                mode="dropdown">
                {status.map(statusItem => (
                  <Picker.Item
                    key={statusItem.value}
                    label={statusItem.label}
                    value={statusItem.value}
                  />
                ))}
              </Picker>
            </View>
          </ScrollView>
          <View style={[styles.controlBtn]}>
            <Button title="cancel" onPress={closeModal} />
            <Button
              title="Create task"
              disabled={content === '' || title === ''}
              onPress={createTask}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  pd_60: {
    paddingVertical: 60,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  bgModalContent: {
    backgroundColor: '#fff',
  },
  modal: {
    paddingTop: 20,
    width: '80%',
  },
  modalContent: {
    width: '100%',
    height: '100%',
  },
  wrap: {
    width: '100%',
    marginVertical: 12,
    paddingHorizontal: 40,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#000',
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    marginTop: 12,
  },
  text_multiple: {
    padding: 10,
    height: 'auto',
    minHeight: 40,
    maxHeight: 120,
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  controlBtn: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 24,
    justifyContent: 'center',
  },
});

export default ModalAddTask;
