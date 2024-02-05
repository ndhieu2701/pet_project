import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({route, navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button_view}>
        <Button title="List task" onPress={() => navigation.navigate("Home")}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: "center",
    alignItems: "center"
  },
  button_view : {
    minWidth: "20%",
  }
});

export default Welcome;
