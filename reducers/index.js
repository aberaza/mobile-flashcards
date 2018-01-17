import { ADD_DECK, ADD_CARD, DELETE_DECK, LOAD_DECKS } from '../actions'

const initialState = {
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
}

/* From udacity spec
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}*/

export default function (state={}, action) {
    switch(action.type){
        case LOAD_DECKS:
            return action.decks
        case ADD_DECK:
            return {...state, [action.deck]:[]}
        case ADD_CARD:
            return {...state, [action.deck]:[...state[action.deck], {q:action.question, a: action.answer}]}
        case DELETE_DECK: 
            return Object.keys(state).reduce((prev, deck) => (deck === action.deck
                ? prev
                : {...prev, [deck]:state[deck]}
            ))
        default :
            return state
    }
}