import { AsyncStorage } from 'react-native'

const DECKS_KEY = "@MyAppDecksKey"

export function fetchDecks() {    
    return AsyncStorage.getItem(DECKS_KEY)
        .then(decks => decks?JSON.parse(decks) : {})
}

export function submitDeck(title){
    console.log("submit deck " + title)
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({[title]:{title,questions:[]}}))
       .then(console.log)
}

export function addQuestion(deck, question) {
    return AsyncStorage.getItem(DECKS_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deck].questions.push(question)
            AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
        }
    )
}