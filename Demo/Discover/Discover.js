import React,{Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform
} from 'react-native'

import CommonNavigatorBar from '../Common/CommonNavigatorBar';

export default class Discover extends Component {

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <CommonNavigatorBar
          />
          <View style={{backgroundColor:'yellow', flex:1}}>
          </View>
        </View>
    )
  }

}