import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const DECK_STORAGE_KEY = 'ABG::mobileFlashcards::deck'
const HISTORY_STORAGE_KEY = 'ABG::mobileFlashcards::history'
const REMINDER_NOTIFICATION_KEY = "ABG:flashcards:reminder:notification"

export function submitDeck({ title, questions }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [title]: { title, questions } }))
}

export function removeDeck(deck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(JSON.parse)
        .then(results => { delete results[deck] })
        .then(JSON.stringify)
        .then(data => AsyncStorage.setItem(DECK_STORAGE_KEY, data))
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(REMINDER_NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    console.log("setLocalNotification")
    AsyncStorage.getItem(REMINDER_NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            console.log("sln::data", data)
            if (data === null) {
                console.log("sln::request permission")
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        console.log("sln::permissionStatus::", status)
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(22)
                            tomorrow.setMinutes(0)
                            
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(REMINDER_NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'No study, no TV',
        body: "You haven't tested your knowledge today... yet!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}