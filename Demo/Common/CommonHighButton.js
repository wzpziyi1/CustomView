
import React, {Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

export default class CommonHighButton extends Component {


  static propTypes = {
    title: PropTypes.string,
    imageUri: PropTypes.string,
    highlightImageUri: PropTypes.string,

    onPress: PropTypes.func,

    imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    highlightedTitleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  };


  constructor(props) {
    super(props);

    this.state = {
      isHighlighted: false
    }
  }

  render() {

    return (
        <TouchableOpacity activeOpacity={this.props.highlightImageUri? 1 : 0.8}
                          onPressIn={()=>{

                            this.setState({
                              isHighlighted: true
                            })

                            if (this.props.onPress) {
                              this.props.onPress(this);
                            }
                          }}
                          onPressOut={()=>{
                            this.setState({
                              isHighlighted: false
                            })
                          }}
                          style={[styles.btnStyle, this.props.buttonStyle]}
        >
          {this.props.title? <Text style={this.state.isHighlighted? this.props.highlightedTitleStyle : this.props.titleStyle}>{this.props.title}</Text> : null}
          {this.props.imageUri?<Image source={{uri:this.state.isHighlighted && this.props.highlightImageUri?this.props.highlightImageUri : this.props.imageUri}} style={[{marginLeft:3},this.props.imageStyle]}/>:null}
        </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});