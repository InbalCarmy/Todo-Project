import { todoReducer } from "./reducers/todo.reducer.js";
import { userReducer } from "./reducers/user.reducer.js";

const { createStore, combineReducers} = Redux

const rootReducer = combineReducers({
   todoModule: todoReducer,
   useModule: userReducer
})

export const store = createStore(rootReducer)
window.gStore = store
store.subscribe(() =>{

})