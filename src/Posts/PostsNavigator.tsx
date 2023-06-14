import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostListScreen from './PostListScreen';
import AppHeader from '../AppHeader';
import PostDetailScreen from './PostDetailScreen';

const Stack = createStackNavigator();

function PostsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: AppHeader,
      }}
    >
      <Stack.Screen name="Post List" component={PostListScreen} />
      <Stack.Screen name="Post Detail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}

export default PostsNavigator;
