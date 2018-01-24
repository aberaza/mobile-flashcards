import React from 'react'
import { Text, TextInput, View, List, FlatList } from 'react-native'
import { connect } from 'react-redux'

import styles from '../utils/styles'
import { appLoadDecks } from '../actions' 

import DeckInfo from './DeckInfo'

const DeckFilter = ({filter, setFilter})=>{
    return (
        <View>
            <TextInput placeholder="Search..."
                onEndEditing={setFilter}
                editable={true}
                autoFocus={false}
            />
        </View>
    )
}

class DeckList extends React.Component {
    state = {
        filter:""
    }

    componentDidMount(){
        this.props.loadDecks({})
    }  

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps
    }

    setFilter = filter => this.setState({ filter })

    _onPressItem = (id) => {
        this.props.navigation.navigate('DeckInfo', {title:id})
    }

    render() { 
        const decks = Object.keys(this.props.decks).map((deck) => this.props.decks[deck])
        
        return (
            <FlatList style={styles.listContainer} 
                data={decks}
                keyExtractor={(item, index) => item.title}
                renderItem={({item, index, separators}) => (<DeckInfo onPressItem={this._onPressItem} {...item} />)}
                ListHeaderComponent={() =>(<DeckFilter filter={this.state.filter} setFilter={this.setFilter} />)}
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
