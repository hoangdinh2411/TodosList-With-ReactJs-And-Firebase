import TodoList from '../components/TodoList'
import { useState, useEffect } from 'react'

//firebase 
import {auth, db, updateDoc,doc} from '../utils/firebase'

export default function Form() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([]);
    const [filterTodos, setFilterTodos] = useState([])
    const [status, setStatus] = useState('all')
    const changeHandler = (e) => {
        setInputText(e.target.value)

    }
    const currentUser = auth.currentUser

    useEffect(() => {
        const ref= updateDoc(doc(db,'users',currentUser.uid),{
            myTodos: todos
        })

    }, [todos])

    
    const submitHandler = (e) => {

        e.preventDefault()
        setTodos([
            ...todos,
            {
                todoId: Math.random() * 1000,
                text: inputText,
                completed: false
            }
        ]
        );

        setInputText('')
    };

    useEffect(() => {
        switch (status) {
            case 'completed':
                setFilterTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilterTodos(todos.filter(todo => todo.completed === false))
                break;

            default:
                setFilterTodos(todos)
                break;
        }
    }, [todos, status])



    return (
        <>
            <form className="todos-form">
                <input type="text" value={inputText} className="todo-input" onChange={changeHandler} />
                <button className="todo-button" type="submit" onClick={submitHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" value={status} className="filter-todo" onChange={(e) => setStatus(e.target.value)} >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <TodoList todos={todos} filterTodos={filterTodos} setTodos={setTodos} />
        </>
    )
}