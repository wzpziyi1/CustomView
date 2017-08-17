/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabBar from './Demo/TabBar';




export default class TabAndNavigator extends Component {
  render() {
    return (
        <TabBar />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('TabAndNavigator', () => TabAndNavigator);
