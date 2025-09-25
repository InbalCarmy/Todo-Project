import { userService } from "../../services/user.service.js"

//* User
export const SET_USER = 'SET_USER'
export const EDIT_USER = 'EDIT_USER'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'


//*Colors
export const CHANGE_BG_COLOR ='CHANGE_BG_COLOR'
export const CHANGE_COLOR = 'CHANGE_COLOR'


const initialState = {
    loggedInUser: userService.getLoggedinUser()
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
                loggedInUser: {
                    ...state.loggedInUser,
                    prefs: {
                        ...state.loggedInUser.prefs,
                        backgroundcolor: cmd.backgroundcolor
                    }
                }
            }

        case CHANGE_COLOR:
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    prefs: {
                        ...state.loggedInUser.prefs,
                        color: cmd.color
                    }
                }
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    activities: cmd.activities
                }
            }
        default:
            return state
    }
}