import { TabNavigator } from 'react-navigation';

import ScreenDeckList from '../components/ScreenDeckList'
import ScreenNewDeck from '../components/ScreenNewDeck'

const routeConfig = {
    List: {
        screen: ScreenDeckList,
        navigationOptions: {

            tabBarLabel: 'Decks List'
        }
    },
    NewDeck: {
        screen: ScreenNewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        }
    }
}

const navConfig = {
    animationEnabled: true,
    order: ['List', 'NewDeck'],
    backBehavior: 'initialRoute',
    tabBarOptions: {
    }
}

export default TabNavigator(routeConfig, navConfig)