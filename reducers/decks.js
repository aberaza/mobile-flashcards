import { ADD_DECK, ADD_CARD, DELETE_DECK, LOAD_DECKS } from '../actions'

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
}*/

export default function (state={}, action) {
    switch(action.type){
        case LOAD_DECKS:
            return action.decks
        case ADD_DECK:
            return {...state, [action.deck]:{title: action.deck, questions: []}}
        case ADD_CARD:
            return {...state, [action.deck]:{title:action.deck, questions: [...state[action.deck].questions, action.question]}}
        case DELETE_DECK: 
            return Object.keys(state).reduce((prev, deck) => (deck === action.deck
                ? prev
                : {...prev, [deck]:state[deck]}
            ))
        default :
            return state
    }
}