import React, {Component, PropTypes} from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import TabBar from './TabBar'

export default class NavigatorBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <Navigator initialRoute={{component: TabBar}}
                   renderScene={this._renderScene.bind(this)}
        />
    )
  }

  _renderScene(route, navigator) {
    return (
        <route.component navigator={navigator} {...route}/>
    )
  }
}