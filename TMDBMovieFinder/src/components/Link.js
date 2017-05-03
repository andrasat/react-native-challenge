import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Alert } from 'react-native'
import { Button, Text } from 'native-base'

export default class Link extends React.Component {

  handleClick = () => {
    const { url } = this.props
    Linking.canOpenURL(url).then(supported => {
      supported ? Linking.openURL(url) : Alert.alert(
        'Error opening Link',
        'Seems there is something wrong with this...')
    })
  }

  render() {
    return (
      <Button transparent onPress={this.handleClick}>
        <Text>{'https://github.com/andrasat'}</Text>
      </Button>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired
}