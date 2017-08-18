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
import CommonHighButton from '../Common/CommonHighButton'

export default class Discover extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <CommonNavigatorBar title="首页"
                              titleStyle={{color: 'black', fontSize: 18}}
                              leftBarItem={this._renderLeftItem()}
                              rightBarItem={this._renderRightItem()}
          />
          <View style={{backgroundColor:'yellow', flex:1}}>
          </View>
        </View>
    )
  }

  _renderLeftItem() {
    return (
        <CommonHighButton
                          titleStyle={{color: 'orange', fontSize: 14}}
                          imageUri="mine-setting-icon"
                          highlightImageUri="mine-setting-icon-click"
                          highlightedTitleStyle={{color: 'gray'}}
                          imageStyle={{width: 18, height: 18}}
                          buttonStyle={{flex: 1, width: 70}}
                          onPress={(btn)=>{
                            console.log('================left')
                          }}
        />
    )
  }

  _renderRightItem() {
    return (
        <CommonHighButton
            titleStyle={{color: 'orange', fontSize: 14}}
            imageUri="nav_item_game_icon"
            highlightImageUri="nav_item_game_click_icon"
            highlightedTitleStyle={{color: 'gray'}}
            imageStyle={{width: 18, height: 18}}
            buttonStyle={{flex: 1, width: 70}}
            onPress={(btn)=>{
              console.log('-----------------right')
            }}
        />
    )
  }


}