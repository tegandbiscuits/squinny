import React from 'react';
import { Button, List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function AccountOverviewScreen({ navigation }: Props) {
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Accounts / Servers</List.Subheader>
        <Button onPress={() => {
          navigation.navigate('Sign In');
        }}
        >
          Add Account/Server
        </Button>
      </List.Section>
    </ScrollView>
  );
}

export default AccountOverviewScreen;
