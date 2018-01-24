import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppRouter from '../utils/AppRouter'

class AppNav extends React.Component {
  render(){
    const { dispatch, nav } = this.props
    return (
      <AppRouter navigation={addNavigationHelpers({dispatch, state : nav})} />
    )
  }
}

const mapStateToProps = ({nav}) => ({nav})

export default connect(mapStateToProps)(AppNav)