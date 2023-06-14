import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PostsNavigator from './Posts/PostsNavigator';
// import { useObservable } from 'react-use';
// import { settings$ } from './settings';
import AccountsNavigator from './Accounts/AccountsNavigator';

const Tab = createMaterialBottomTabNavigator();

function RootNavigator() {
  // const settings = useObservable(settings$, {});

  // if (!settings.baseUrl) {
  //   return (
  //     <SetupNavigator />
  //   );
  // }

  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={PostsNavigator}
        options={{ tabBarIcon: 'card-text-outline' }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsNavigator}
        options={{ tabBarIcon: 'account' }}
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
