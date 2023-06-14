import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServerSelectionScreen from './ServerSelectionScreen';
import AppHeader from '../AppHeader';

function SetupNavigator() {
  const SetupStack = createStackNavigator();
  return (
    <SetupStack.Navigator
      initialRouteName="Server Selection"
      screenOptions={{ header: AppHeader }}
    >
      <SetupStack.Screen
        name="Server Selection"
        component={ServerSelectionScreen}
      />
    </SetupStack.Navigator>
  );
}

export default SetupNavigator;
