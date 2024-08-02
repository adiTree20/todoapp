export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
            <input 
                type="checkbox" 
                checked={completed} 
              onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)} // this calls a function that calls deleteTodo()
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    )
}