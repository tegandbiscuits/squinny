import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PostsNavigator from './Posts/PostsNavigator';
import useSettings from './useSettings';
import SetupNavigator from './Setup/SetupNavigator';

const Tab = createMaterialBottomTabNavigator();

function RootNavigator() {
  const { settings } = useSettings();

  if (!settings.baseUrl) {
    return (
      <SetupNavigator />
    );
  }

  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={PostsNavigator}
        options={{ tabBarIcon: 'card-text-outline' }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
