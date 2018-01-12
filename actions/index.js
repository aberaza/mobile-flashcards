export const ADD_DECK = "app_add_deck"
export const DELETE_DECK = "app_delete_deck"
export const ADD_CARD = "app_add_card"
//export const DELETE_CARD = "app_delete_card"

export const appAddDeck = (deck) => (
    {type: ADD_DECK, deck}
)
export const appDeleteDeck = (deck) => (
    {type: DELETE_DECK, deck}
)
export const appAddCard = (deck, question, answer ) =>(
    {type: ADD_CARD, deck, question, answer}
)
