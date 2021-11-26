
export default function Todo({todos, todo, setTodos}){
    const deleteHandler = () =>{
        setTodos(todos.filter(item=>item.todoId !== todo.todoId))
    }

    const completedHandler =() =>{
        setTodos(todos.map(item =>{
            if(item.todoId === todo.todoId){
                    return {
                        ...todo,
                    completed: !todo.completed
                }
            }
            return item
        }))
    }
    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`} >
            <li className="todo-item">{
                todo.text
            }
            </li>
            <button className="complete-btn" onClick={completedHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler} >
                <i className="fas fa-trash"></i>
            </button>
        </div>

    )
}