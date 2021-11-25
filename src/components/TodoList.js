import Todo from './Todo'
export default function TodoList({todos , setTodos , filterTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {
                filterTodos.map(todo=>
                    <Todo key={todo.todoId} todo={todo} todos={todos} setTodos={setTodos}/>
                )
            }
            </ul>
        </div>
    )
}