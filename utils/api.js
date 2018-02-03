import { AsyncStorage } from 'react-native'

const DECKS_KEY = "@MyAppDecksKey"

export function fetchDecks() {    
    return AsyncStorage.getItem(DECKS_KEY)
        .then(decks => decks?JSON.parse(decks) : {})
}

export function submitDeck(title){
    console.log("submit deck " + title)
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({[title]:{title,questions:[]}}))
    //   .then(console.log)
}

export function addQuestion(deck, question) {
    console.log("add card to deck " + deck, question)
    return AsyncStorage.getItem(DECKS_KEY)
        .then((results) => {
            let data = JSON.parse(results)
            console.log("api ",data)
            data[deck].questions.push(question)
            console.log("api ", data)
            AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
        }
    )
}