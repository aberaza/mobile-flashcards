import { NavigationActions } from 'react-navigation'

import AppRouter from '../utils/AppRouter'
import { GOTO_SCREEN, gotoScreen } from '../actions'

//const initialState = AppRouter.router.getStateForAction(AppRouter.router.getActionForPathAndParams('Home'))
// "Magic" workaround found here: https://github.com/react-navigation/react-navigation/issues/1357
const initialState=AppRouter.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'Home',
	  }),
	],
}))
const navReducer = (state=initialState, action) =>  AppRouter.router.getStateForAction(action, state) || state

export default navReducer