import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import DeckRouter from '../utils/DeckRouter'

export default class DeckInfoNavigator extends React.Component {
  render(){
    const { dispatch, nav } = this.props
    return (
      <DeckRouter navigation={this.props.navigation} />
    )
  }
}

DeckInfoNavigator.router = DeckRouter.router