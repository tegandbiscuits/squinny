import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from '../AppHeader';
import AccountOverviewScreen from './AccountOverviewScreen';
import SignInScreen from './SignInScreen';

const Stack = createStackNavigator();

function AccountsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: AppHeader }}
    >
      <Stack.Screen name="Account Overview" component={AccountOverviewScreen} />
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}

export default AccountsNavigator;
