import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import styles from './utils/styles';
import reducer from './reducers';

import AppHome from './components/Home'
/*

const DrawerNav = DrawerNavigator({
  Home: {
    screen: Home
  },
  Settings: {
    screen: Settings
  }
})

*/
const Settings = ({ navigation }) => (
  <View>
    <Text>This view has not yet been implemented</Text>
  </View>
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <AppHome />
      </Provider>
    );
  }
}
