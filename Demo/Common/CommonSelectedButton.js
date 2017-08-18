import React, {Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

export default class CommonSelectedButton extends Component {

  static propTypes = {
    title: PropTypes.string,
    imgUri: PropTypes.string,
    selectedImgUri: PropTypes.string,

    titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    selectedTitleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    imgStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    buttonStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    onPress: PropTypes.func
  }


  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    }
  }

  render() {

    return (
        <TouchableOpacity activeOpacity={1}
                          style={[styles.btnStyle, this.props.buttonStyle]}
                          onPress={()=>{
                            if (this.props.onPress) {
                              this.props.onPress(this)
                            }
                          }}
        >
          {this.props.title ?
              <Text style={this.state.isSelected ? this.props.selectedTitleStyle : this.props.titleStyle}>{this.props.title}</Text>
              : null
          }

          {this.props.imgUri ? <Image source={{uri:this.state.isSelected && this.props.selectedImgUri ? this.props.selectedImgUri : this.props.imgUri}} style={[{marginLeft:3},this.props.imgStyle]}/>:null}

        </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  btnStyle : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});