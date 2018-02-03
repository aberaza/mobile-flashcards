import React from 'react'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'

import AppRouter from '../utils/AppRouter'

class AppNav extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', _ => {
      const { dispatch, nav, navigation } = this.props
      if(nav.routes.length===1 && nav.routes[0].routeName === 'Home' && nav.routes[0].index === 0) {
        return false
      }
      dispatch ({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render(){
    const { dispatch, nav } = this.props
    return (
      <AppRouter navigation={addNavigationHelpers({dispatch, state : nav})} />
    )
  }
}

const mapStateToProps = ({nav}) => ({nav})

export default connect(mapStateToProps)(AppNav)