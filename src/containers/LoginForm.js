import { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../utils/firebase'
import Button from '../components/Button/Button'
import {  useNavigate } from 'react-router-dom'
export default function LoginForm({ setUser }) {
    let navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        emailInput: '',
        passwordInput: '',
        errorMessage: null
    })

    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, loginInfo.emailInput, loginInfo.passwordInput)
            .then(userCredential => {
                const user = userCredential.user
                setUser(user.email)
                navigate("../todos", { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message
                setLoginInfo({
                    ...loginInfo,
                    errorMessage: errorMessage

                })
                setLoginInfo({
                    emailInput: '',
                    passwordInput: '',
                    errorMessage: null
                })
            })

    }
    return (
        <form className="login-form">
            <div className="input-boxes" >
                Email:
                <input type="text" className="todo-input" value={loginInfo.emailInput} onChange={(e) => setLoginInfo({ ...loginInfo, emailInput: e.target.value })} />
            </div>
            <div className="input-boxes">
                Password:
                <input type="text" className="todo-input" value={loginInfo.passwordInput} onChange={(e) => setLoginInfo({ ...loginInfo, passwordInput: e.target.value })} />
            </div>
            {
                loginInfo.errorMessage &&
                <span>{loginInfo.errorMessage}</span>
            }
            <div className="input-boxes">
                <Button title='Sign In' type="submit" onHandlerClick={handleSignIn} />
            </div>
        </form>
    )
}