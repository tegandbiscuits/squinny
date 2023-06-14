import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useSettings from '../useSettings';

function ServerSelectionScreen() {
  const { updateSettings } = useSettings();

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
