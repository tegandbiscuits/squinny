/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { initSettings } from './src/settings';

initSettings();
AppRegistry.registerComponent(appName, () => App);
