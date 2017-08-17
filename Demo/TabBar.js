

import React, {Component, PropTypes} from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';

import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";

export default class TabBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }
  }

  render() {
    return (
        <TabNavigator>
          {this._renderTabItem(0, '首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', <View style={{backgroundColor:'yellow', flex:1}}/>, 99)}
          {this._renderTabItem(1, '个人', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', <View style={{backgroundColor:'blue', flex:1}}/>, 2)}
          {this._renderTabItem(2, '详情', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', <View style={{backgroundColor:'green', flex:1}}/>, 0)}
          {this._renderTabItem(3, '购物车', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', <View style={{backgroundColor:'white', flex:1}}/>, 3)}
        </TabNavigator>
    )
  }

  _renderTabItem(index, title, imgUri, selectedImgUri, component, badgeText) {
    return (
        <TabNavigatorItem title={title}
                          selected={this.state.selectedIndex == index}
                          renderIcon={() => <Image source={{uri: imgUri}} style={styles.tabImgStyle} />}
                          renderSelectedIcon={()=> <Image source={{uri: selectedImgUri}} style={styles.tabImgStyle} />}
                          renderBadge={badgeText? this._renderBadge.bind(this, badgeText) : null}
                          selectedTitleStyle={{color:'rgb(56,165,157)'}}
                          onPress={()=>{
                            this.setState({
                              selectedIndex: index
                            })
                          }}
        >
          {component}
        </TabNavigatorItem>
    )
  }

  _renderBadge(num) {
    return (
        <View style={{backgroundColor: 'red', width: 18, height: 18, alignItems: 'center', justifyContent: 'center', borderRadius: 9, marginTop:2}}>
          <Text style={{color: 'white', fontSize: 10}}>{num}</Text>
        </View>
    )
  }

}

var styles = StyleSheet.create({
  tabImgStyle: {
    width: 25,
    height: 25
  },
});