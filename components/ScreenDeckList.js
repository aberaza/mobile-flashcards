import React from 'react'
import { Text, View, List, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'

import styles from '../utils/styles'
import { appLoadDecks } from '../actions' 

import DeckInfo from './DeckInfo'

class DeckList extends React.Component {
  
    componentDidMount(){
        this.props.loadDecks({})
    }  

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState
    }

    _onPressItem = (id) => {
        this.props.navigation.navigate('DeckHub', {title:id})
    }

    render() { 
        const decks = Object.keys(this.props.decks).map((deck) => this.props.decks[deck])

        return (
                <FlatList style={styles.listContainer} 
                    data={decks}
                    keyExtractor={(item, index) => item.title}
                    renderItem={({item, index, separators}) => (<DeckInfo onPressItem={this._onPressItem} {...item} />)}
                    ItemSeparatorComponent={(index)=>(<View key={index} style={styles.separator} />)}
                />
        )
    }
}

function mapStateToProps({decks, nav}) {
    return { decks, nav }
}

const mapDispatchToProps = {
    loadDecks : appLoadDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
