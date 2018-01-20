import AppRouter from '../utils/AppRouter'

const initialState = AppRouter.router.getStateForAction(AppRouter.router.getActionForPathAndParams('Home'))

const navReducer = (state=initialState, action) => {
    return AppRouter.router.getStateForAction(action, state)
}

export default navReducer