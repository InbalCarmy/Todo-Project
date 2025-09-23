import { userService } from "../../services/user.service.js"

//* User
export const SET_USER = 'SET_USER'
export const EDIT_USER = 'EDIT_USER'

//*Colors
export const CHANGE_BG_COLOR ='CHANGE_BG_COLOR'
export const CHANGE_COLOR = 'CHANGE_COLOR'


const loggedInUser = userService.getLoggedinUser()
const initialState = {
    loggedInUser,
    backgroundcolor: (loggedInUser && loggedInUser.prefs && loggedInUser.prefs.backgroundcolor) || 'white',
    color: (loggedInUser && loggedInUser.prefs && loggedInUser.prefs.color) || 'black'
}

export function userReducer(state = initialState, cmd) {
    switch (cmd.type) {
        case SET_USER:
            return {
                ...state,
                loggedInUser: cmd.user
            }

        case EDIT_USER:
           return { 
                ...state,
                loggedInUser: cmd.user
           } 

        case CHANGE_BG_COLOR:
            return {
                ...state, 
                backgroundcolor: cmd.backgroundcolor
            }

        case CHANGE_COLOR:
            return {
                ...state,
                color: cmd.color
            }
        default:
            return state
    }
}