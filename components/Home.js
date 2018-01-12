import React from 'react'
import { Text, TextInput, View, List, FlatList } from 'react-native'
import { connect } from 'react-redux'

import styles from '../utils/styles'

import DeckInfo from './DeckInfo'

class Home extends React.Component {
    render() {
        const decks = Object.keys(this.props.decks).map((deck) => this.props.decks[deck])
        
        return (
            
            <FlatList style={styles.listContainer} 
                data={decks}
                keyExtractor={(item, index) => item.title}
                renderItem={({item, index, separators}) => (<DeckInfo {...item} />)}
                ListHeaderComponent={()=>(<View><TextInput style={styles.styles} placeholder="Search..."/></View>)}
                ItemSeparatorComponent={(index)=>(<View key={index} style={styles.separator} />)}
            />
                
                /*
            <View style={styles.container}>
                {decks.length && decks.map(deck => (<DeckInfo key={deck.title} {...deck} />))}
                {(decks.length === 0) && (<Text> You don't have any deck </Text>)}
            </View>
            */
        )
    }
}

function mapStateToProps(state) {
    return { decks: state }
}

export default connect(mapStateToProps)(Home)
