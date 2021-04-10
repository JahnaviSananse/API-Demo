/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import apiDemo from './apiDemo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => apiDemo);
