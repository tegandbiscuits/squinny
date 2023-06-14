import React from 'react';
import { Appbar } from 'react-native-paper';
import type { StackHeaderProps } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';

function AppHeader({
  route,
  options,
  navigation,
  back,
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default AppHeader;
