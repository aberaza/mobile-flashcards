import * as api from '../utils/api'

export const ADD_DECK = "app_add_deck"
export const DELETE_DECK = "app_delete_deck"
export const ADD_CARD = "app_add_card"
export const LOAD_DECKS = "app_load_decks"
export const GOTO_PATH = "app_goto_path"
export const GOTO_TAB = "app_goto_tab"


export const addDeck = (deck) => (
    {type: ADD_DECK, deck}
)
export const deleteDeck = (deck) => (
    {type: DELETE_DECK, deck}
)
export const addCard = (deck, question, answer ) =>(
    {type: ADD_CARD, deck, question, answer}
)
export const loadDecks = (decks) => (
    {type: LOAD_DECKS, decks}
)

export const gotoPath = (path) => (
    {type: GOTO_PATH, path}
)
export const gotoTab = (tab) => (
    {type: GOTO_TAB, tab}
)

//navigation actions

export const appGotoPath = path => dispatch => dispatch(gotoPath(path))
export const appGotoTab = tab => dispatch => dispatch(gotoTab(tab))

export const appAddDeck = deck => dispatch => api.submitDeck(deck)
    .then(_=> dispatch(addDeck(deck)))

export const appAddCard = (deck, q, a) => dispatch => api.addQuestion(deck, {q, a}) 
    .then(_=> dispatch(addCard(deck, question, answer)))

export const appLoadDecks = _ => dispatch => api.fetchDecks()
    .then(decks => dispatch(loadDecks(decks)))
