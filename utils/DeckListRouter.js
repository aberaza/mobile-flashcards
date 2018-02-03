import { TabNavigator } from 'react-navigation';

import { DARK, YELLOW, RED } from './colors'
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
        activeTintColor: RED,
        inactiveTintColor : YELLOW,
        style: {
            backgroundColor : DARK,
        },
        labelStyle : {
            fontSize:14,
            fontWeight: 'bold'
        },
        indicatorStyle : {
            borderBottomColor: RED,
            borderBottomWidth: 2,
        }

    }
}

export default TabNavigator(routeConfig, navConfig)