import { userService } from "../../services/user.service.js";
import { store } from "../store.js";
import { EDIT_USER, SET_USER, CHANGE_BG_COLOR, CHANGE_COLOR } from "../reducers/user.reducer.js"

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

function _saveUser(userToSave, action){
    return userService.save(userToSave)
        .then(savedUser => {
            store.dispatch({ type: action, user: savedUser })
            return savedUser
        })
        .catch(err => {
            console.log('user action -> Cannot save user', err);
            throw err;
    })
}

export function updateBalance(todoTxt) {
    const currentUser = store.getState().useModule.loggedInUser
    const updatedUser = {
        ...currentUser,
        balance: (currentUser.balance || 0) + 10,
    }
    return _saveUser(updatedUser, SET_USER)
}

export function saveUser(user){
    return _saveUser(user, EDIT_USER)
}

export function changeBGcolor(bgColor, user){
    if (!user.prefs) user.prefs = {}
    user.prefs.backgroundcolor = bgColor
    return userService.save(user)
    .then(savedUser =>{
        store.dispatch({type: CHANGE_BG_COLOR, backgroundcolor: savedUser.prefs.backgroundcolor})
    })
    .catch(err => {
        console.log('user action -> Cannot save user', err);
        throw err;
    })
}

export function changeColor(color, user){
    if (!user.prefs) user.prefs = {}
    user.prefs.color = color
    return userService.save(user)
    .then(savedUser =>{
        store.dispatch({type: CHANGE_COLOR, color: savedUser.prefs.color})
    })
    .catch(err => {
        console.log('user action -> Cannot save user', err);
        throw err;
    })
}
