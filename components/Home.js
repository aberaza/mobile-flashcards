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

class Home extends React.Component {
    state = {
        filter:""
    }

    componentDidMount(){
        this.props.loadDecks({})
    }  

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps
    }


    setFilter = filter => this.setState({filter})

    _onPressItem = (id) => {
        alert("You selected " + id)
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

const mapDispatchToProps = {
    loadDecks : appLoadDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
