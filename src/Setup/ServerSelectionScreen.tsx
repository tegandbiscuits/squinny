import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { updateSettings } from '../settings';

function ServerSelectionScreen() {
  return (
    <View>
      <Button
        mode="contained"
        onTouchEnd={() => {
          updateSettings({ baseUrl: 'https://lemmy.world' });
        }}
      >
        Fake Form Submit
      </Button>
    </View>
  );
}

export default ServerSelectionScreen;
