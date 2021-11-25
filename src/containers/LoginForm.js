import { useState , useEffect } from 'react'
import { auth, signInWithEmailAndPassword } from '../utils/firebase'

export default function LoginForm({ setUser }) {

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
                <button className="todo-button" type="submit" onClick={handleSignIn}>
                    Login
                </button>
            </div>
        </form>
    )
}