import { useState } from 'react'
import Button from '../components/Button/Button'
import {
    db,
    auth,
    createUserWithEmailAndPassword,
    doc,
    setDoc
} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'


export default function SignUpForm({ setUser }) {
    let navigate = useNavigate();

    const isEmpty = () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setTimeout(() => {
            setErrMessage('')
        }, 2000);
    }
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const handleRegister = (e) => {
        e.preventDefault()
        if (userName === '' || email === '' || password === '') {
            setErrMessage('Not be empty')
            isEmpty()
        } else {

            createUserWithEmailAndPassword(auth, email, password)
                .then(res => res.user
                )
                .then(data => {
                    setUser(data)
                    setDoc(doc(db, 'users', data.uid), {
                        userInfo: {
                            userId: data.uid,
                            name: '',
                            email: data.email
                        },

                    })
                    navigate("../todos", { replace: true });

                })

                .catch(error => {
                    setErrMessage('Something wrong. Please enter again!')
                    isEmpty()
                })
        }


    }
    return (
        <form className="login-form">
            <div className="input-boxes" >
                Enter your name:
                <input type="text" className="todo-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input-boxes" >
                Enter email:
                <input type="email" className="todo-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-boxes">
                Enter password:
                <input type="password" className="todo-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {
                errMessage &&
                <span>{errMessage}</span>
            }
            <div className="input-boxes">
                <Button title='Register' onHandlerClick={handleRegister} />
            </div>
        </form>
    )
}