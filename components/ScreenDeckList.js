import React from 'react'
import { Text, TextInput, View, List, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'

import styles from '../utils/styles'
import { appLoadDecks } from '../actions' 

import DeckInfo from './DeckInfo'

/*
const DeckFilter = ({filter, setFilter})=>{
    return (
        <View>
            <TextInput placeholder="Search..."
                onChangeText={setFilter}
                onSubmitEditing={_=>console.log("onSubmitEditing::")}
                returnKeyType="search"
                editable={true}
                autoFocus={false}
                style={styles.searchInput}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
    )
}
ListHeaderComponent={() =>(<DeckFilter style={styles.deckItem} filter={this.state.filter} setFilter={this.setFilter} />)}
                    
*/

class DeckList extends React.Component {
    /*state = {
        filter:""
    }
*/
    componentDidMount(){
        this.props.loadDecks({})
    }  

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState
    }

    /*
    setFilter = filter => {
        console.log("setFilter::",filter)
        this.setState({ filter })
    }
*/
    _onPressItem = (id) => {
        this.props.navigation.navigate('DeckHub', {title:id})
    }

    render() { 
        const decks = Object.keys(this.props.decks).map((deck) => this.props.decks[deck])
        /*
        const filter = this.state.filter.toLowerCase();

        console.log("should re-render?")
        if(this.state.filter){
            decks = decks.filter((item)=>item.title.toLowerCase.search(filter)>=0)
        }
*/
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
