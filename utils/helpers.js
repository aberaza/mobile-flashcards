import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'ABG::mobileFlashcards::deck'
const HISTORY_STORAGE_KEY = 'ABG::mobileFlashcards::history'

export function submitDeck({title, questions}) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]:{title, questions }}))
}

export function removeDeck(deck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(JSON.parse)
        .then( results => {delete results[deck]})
        .then(JSON.stringify)
        .then(data => AsyncStorage.setItem(DECK_STORAGE_KEY, data))
}