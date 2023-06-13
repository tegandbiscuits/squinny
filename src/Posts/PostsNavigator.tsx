import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostListScreen from './PostListScreen';
import AppHeader from '../AppHeader';

const Stack = createStackNavigator();

function PostsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: AppHeader,
      }}
    >
      <Stack.Screen name="Posts" component={PostListScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigator;
