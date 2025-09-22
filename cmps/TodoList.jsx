import { TodoPreview } from "./TodoPreview.jsx"
const { Link } = ReactRouterDOM

export function TodoList({ todos, onRemoveTodo, onToggleTodo }) {

    function importanceLevel(todo) {
        const level = todo.importance
        if(level >= 1 && level <= 10 ){
            return level
        }
        return '10plus'
    }


    return (
        <ul className="todo-list">
            {todos.map(todo =>
                <li className={`importance-${importanceLevel(todo)}`} key={todo._id}>
                    <TodoPreview todo={todo} onToggleTodo={()=>onToggleTodo(todo)} />
                    <section>
                        <button className='remove-btn' onClick={() => {
                            if(window.confirm("Are you sure you want to delete this todo?")){
                                onRemoveTodo(todo._id)
                            }
                        }}>
                         X
                        </button>
                        <button><Link to={`/todo/${todo._id}`}>Details</Link></button>
                        <button><Link to={`/todo/edit/${todo._id}`}>Edit</Link></button>
                    </section>
                </li>
            )}
        </ul>
    )
}