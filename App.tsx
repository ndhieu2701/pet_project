import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home/home';
import Welcome from './screens/welcome';

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackRoutes = () => (
  <RootStack.Navigator initialRouteName="Welcome">
    <RootStack.Screen name="Welcome" component={Welcome} />
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{title: 'List task'}}
    />
  </RootStack.Navigator>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStackRoutes />
    </NavigationContainer>
  );
}

export default App;
