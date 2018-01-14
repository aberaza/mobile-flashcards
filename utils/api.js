import { AsyncStorage } from 'react-native'

const DECKS_KEY = "MyAppDecksKey"

export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_KEY)
}

export function submitDeck(title){
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({[title]:{title,questions:[]}}))
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