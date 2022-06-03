import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native';
import {globalFonts} from './styles'

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity style={[this.props.style]} onPress={this.props.func}>
            <Text style={{color:'white', fontFamily:globalFonts.semibold}}>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
}

MyButton.propTypes={
    title:PropTypes.string.isRequired,
    func:PropTypes.func.isRequired,
    style:PropTypes.object.isRequired
}
