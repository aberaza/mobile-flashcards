import { AsyncStorage } from 'react-native'

const DECKS_KEY = "MyAppDecksKey"


const _initialState = JSON.stringify({
    "mazo de prueba 1" : {
        title : "mazo de prueba 1",
        questions : [
           {q: "¿Cómo te llamas?", a: "Aritz"},
            {q: "¿Dónde naciste?", a: "Barcelona, España"}
        ],
    },
    "mazo de prueba áçñ" : {
        title : "mazo de prueba áçñ",
        questions : [
            {q: "Si, otro mazo", a: "oui, encore un autre"}
        ]
    }
})

const initState = current => {
    console.log("initState " + current)
    if(current !== null){
        return current;
    }
    AsyncStorage.setItem(DECKS_KEY, _initialState)
    return _initialState
}

export function fetchDecks() {    
    console.log("Get stored decks") 

    return    AsyncStorage.getItem(DECKS_KEY)
        .then(JSON.parse)
}

export function submitDeck(title){
    console.log("submit deck " + title)
    return AsyncStorage.getItem(DECKS_KEY, (e,d) => console.log(e,d))
        .then(decks => {
            console.log("found decks: " + decks)
            decks = decks === null? {} : JSON.parse(decks)
            console.dir(decks)
            decks[title] = {title, questions:[]}
            console.dir(decks)
            return decks;
        })
        .then(decks => AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks)))
    //mergeItem(DECKS_KEY, JSON.stringify({[title]:{title,questions:[]}}))
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