import React from 'react';

import DeckListRouter from '../utils/DeckListRouter'

export default class DeckListNavigator extends React.Component {
  render() {
    return (
      <DeckListRouter navigation={this.props.navigation} />
    )
  }
}

DeckListNavigator.router = DeckListRouter.router;