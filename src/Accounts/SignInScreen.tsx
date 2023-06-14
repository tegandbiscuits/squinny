import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { updateSettings } from '../settings';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

function SignInScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        mode="contained"
        onTouchEnd={() => {
          updateSettings({ baseUrl: 'https://lemmy.world' });
          navigation.goBack();
        }}
      >
        Fake Form Submit
      </Button>
    </View>
  );
}

export default SignInScreen;
