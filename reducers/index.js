import { ADD_DECK, ADD_CARD, DELETE_DECK } from '../actions'

const initialState = {
    "mazo de prueba 1" : [
        {q: "¿Cómo te llamas?", a: "Aritz"},
        {q: "¿Dónde naciste?", a: "Barcelona, España"}
    ],

    "mazo de prueba áçñ" : [
        {q: "Si, otro mazo", a: "oui, encore un autre"}
    ]
}

export default function (state=initialState, action) {
    switch(action.type){
        case ADD_DECK:
            return {...state, [action.deck]:[]}
        case ADD_CARD:
            return {...state, [action.deck]:[...state[action.deck], {q:action.question, a: action.answer}]}
        case DELETE_DECK: 
            return Object.keys(state).reduce((prev, deck) => (deck === action.deck
                ? prev
                : {...prev, [deck]:state[deck]}
            ))
    }
}