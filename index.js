/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {Second as DefaultRoot} from './src';

AppRegistry.registerComponent(appName, () => DefaultRoot);
