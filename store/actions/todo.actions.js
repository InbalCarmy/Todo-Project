import { todoService } from "../../services/todo.service.js";
import { store } from "../store.js";
import { ADD_TODO, REMOVE_TODO, SET_TODOS, UNDO_TODOS, UPDATE_TODO } from "../reducers/todo.reducer.js";
import { updateBalance } from "./user.actions.js";


export function loadTodos(filterBy) {
    return todoService.query(filterBy)
    .then(todos => {
        store.dispatch({type: SET_TODOS, todos})
    })
    .catch(err => {
        console.log('todo action -> Cannot load todos' , err);
        throw err
        
    })
}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type: REMOVE_TODO, todoId })
        })
        .catch(err => {
            console.log('todo action -> Cannot remove todo', err)
            throw err
        })
}

export function saveTodo(todo) {
    const type = todo._id ? UPDATE_TODO : ADD_TODO
    const prevTodo = store.getState().todoModule.todos.find(t => t._id === todo._id)
    const wasNotDone = prevTodo._id && !prevTodo.isDone

    return todoService.save(todo)
        .then((savedTodo) => {
            store.dispatch({ type, todo: savedTodo })
            
            if (wasNotDone && savedTodo.isDone) {
                updateBalance(todo.txt)
            }
            
            return savedTodo
        })
        .catch(err => {
            console.log('todo action -> Cannot save todo', err)
            throw err
        })
}