import { userService } from "../../services/user.service.js";
import { store } from "../store.js";
import { SET_USER } from "../reducers/user.reducer.js"

export function login(credentials) {
    return userService.login(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user })
        })
        .catch(err => {
            console.log('user actions -> Cannot login', err)
            throw err
        })
}

export function signup(credentials) {
    return userService.signup(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user })
        })
        .catch(err => {
            console.log('user actions -> Cannot signup', err)
            throw err
        })
}


export function logout() {
    return userService.logout()
        .then(() => {
            store.dispatch({ type: SET_USER, user: null })
        })
        .catch((err) => {
            console.log('user actions -> Cannot logout', err)
            throw err
        })
}

export function updateBalance(todoTxt) {
    const currentUser = store.getState().useModule.loggedInUser
    const updatedUser = {
        ...currentUser,
        balance: (currentUser.balance || 0) + 10,
        activities: [...(currentUser.activities || []), {txt: todoTxt, at: Date.now()}]
    }
    return userService.save(updatedUser)
        .then(savedUser => {
            store.dispatch({ type: SET_USER, user: savedUser })
            return savedUser
        })
}