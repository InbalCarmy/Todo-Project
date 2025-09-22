// Only here we make changes in the global state

// Todos:
export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const UNDO_TODOS = 'UNDO_TODOS'

const initialState ={
    todos: [],
    lastTodos: []
}

export function todoReducer(state = initialState, cmd){
    switch (cmd.type) {

        // Todos
        case SET_TODOS:
            return {
                ...state, 
                todos: cmd.todos
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, cmd.todo]
            }
        
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== cmd.todoId)
            }

        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === cmd.todo._id ? cmd.todo : todo ) 
            }
        
        case UNDO_TODOS:
            return {
                ...state,
                todos: [...state.lastTodos]
            }

        default:
            return state

    }
}